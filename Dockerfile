# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Copy the application code
COPY ./build-files/pm4 /code/pm4

# Set non-interactive mode for apt-get
ENV DEBIAN_FRONTEND=noninteractive

# Update package list and install software properties common
RUN apt-get update \
    && apt-get install -y software-properties-common

# Add PHP repository
RUN add-apt-repository ppa:ondrej/php

# Install required packages
RUN apt-get update && \
    apt-get install -y \
        git \
        curl \
        wget \
        unzip \
        supervisor \
        nginx \
        vim \
        cron \
        mysql-client \
        build-essential \
        && rm -rf /var/lib/apt/lists/*

# Install PHP and related extensions
RUN apt-get update && apt-get install -y \
    php8.2 \
    php8.2-cli \
    php8.2-fpm \
    php8.2-common \
    php8.2-mysql \
    php8.2-zip \
    php8.2-gd \
    php8.2-dev \
    php8.2-mbstring \
    php8.2-opcache \
    php8.2-imap \
    php8.2-soap \
    php8.2-curl \
    php8.2-xml \
    php8.2-xmlrpc \
    php8.2-bcmath \
    php8.2-imagick \
    php8.2-dom \
    php8.2-sqlite3 \
    php8.2-intl

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install DockerCLI
RUN curl -fsSLO https://download.docker.com/linux/static/stable/x86_64/docker-20.10.5.tgz && \
    tar xzvf docker-20.10.5.tgz --strip 1 -C /usr/local/bin docker/docker && \
    rm docker-20.10.5.tgz

# Configure PHP-FPM to use 'root' instead of 'www-data'
RUN sed -i 's/www-data/root/g' /etc/php/8.2/fpm/pool.d/www.conf

# Copy configuration files for Laravel-Cron, Nginx, and Supervisor
COPY build-files/laravel-cron /etc/cron.d/laravel-cron
COPY build-files/nginx.conf /etc/nginx/nginx.conf
COPY build-files/services.conf /etc/supervisor/conf.d/services.conf

# Set appropriate permissions for Laravel-Cron and set up the Laravel-Cron job
RUN chmod 0644 /etc/cron.d/laravel-cron && crontab /etc/cron.d/laravel-cron

# Set working directory for subsequent commands
WORKDIR /code/pm4

# Expose ports 443, 6001, and 80
EXPOSE 443 6001 80

# Install PHP dependencies using Composer, ignoring the ext-rdkafka platform requirement
RUN composer install --ignore-platform-req=ext-rdkafka

# Copy Laravel Echo Server configuration file
COPY build-files/laravel-echo-server.json .

# Ensure NVM environment is loaded before running npm commands
SHELL ["/bin/bash", "-c"]

# Install NVM, Node.js version 16.18, npm version 8.19, and run npm commands
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.39.0/install.sh | bash \
    && export NVM_DIR="/root/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install 16.18 \
    && nvm alias default 16.18 \
    && nvm use default \
    && npm install -g npm@8.19 \
    && npm install \
    && npm run dev

# Copy PHP-FPM PID file
COPY build-files/php8.2-fpm.pid /run/php/php8.2-fpm.pid

# Copy initialization script
COPY build-files/init.sh .

# Define the command to run the initialization script and start Supervisor
CMD ["/bin/bash", "-c", "bash init.sh && source /root/.nvm/nvm.sh && nvm use 16.18 && npm install -g npm@8.19 && supervisord --nodaemon"]