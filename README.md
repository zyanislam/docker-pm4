# Dockerized ProcessMaker 4.8

![banner](https://i.imgur.com/0BF6qb1.png)

This repository contains a Dockerized setup for ProcessMaker version 4.8, enabling developers to deploy it quickly.

## Features

- **User-Friendly Workflow Design**: ProcessMaker 4.8 provides an intuitive and user-friendly interface for designing workflows, making it easy for users to create and manage complex business processes.

- **Flexible Process Automation**: With ProcessMaker 4.8, users can automate a wide range of business processes, from simple task assignments to complex, multi-step workflows.

- **Role-Based Access Control**: ProcessMaker 4.8 incorporates role-based access control, allowing organizations to define access levels based on roles and responsibilities. This ensures that users have the appropriate permissions for their tasks, enhancing security.

- **Real-Time Monitoring and Reporting**: Gain valuable insights into ongoing processes with real-time monitoring and reporting features.

- **Integration Capabilities**: ProcessMaker 4.8 supports integration with other business systems and tools, providing a seamless experience for users who need to connect workflows with external applications, databases, or services.

and many more...

## Getting Started

### Prerequisites
- **Docker Engine Version 3.2 or above**
  - For Mac and Windows users, we recommend using [Docker Desktop](https://www.docker.com/products/docker-desktop)
  - For other installation options, refer to [Installation Instructions](https://docs.docker.com/engine/install/)
  
- **Docker Compose version 1.2 or above**
  - If using Docker Desktop, no need to install Docker Compose as it comes included.
  - For all other users, follow the [Installation Instructions](https://docs.docker.com/compose/install/)

### Running an Instance

- Clone or download the repository

| Variable | Description |
| --- | --- |
| PM_APP_URL | The base URL accessible from outside the container. Typically `http://localhost`, but you can customize it by modifying your hosts file and adding `extra_hosts` to the docker-compose.yml |
| PM_APP_PORT | Choose a different port if 8080 is already in use on your host |
| PM_BROADCASTER_PORT | Select an alternative port for the Socket.io server if 6001 is occupied on your host |
| PM_DOCKER_SOCK | Location of your Docker socket file. Refer to [note](#bind-mounting-the-docker-socket) for details |

### Setting the stage

- Run the following command to build the docker containers and download all the dependencies:

  ```bash
  sudo docker-compose up --build
  ```

  **Note:** The use of `sudo` in the command is not a requirement if your default user has the necessary permissions.
  
  **If the image doesn't exist, this command will pull it (it might take some time depending on the internet speed as there are multiple layers to pull and dependencies to download and install).**

    For the first run, the install script will execute, and the database will be seeded. This process may take a few minutes, especially during the downloading and built of the script executor image.

    Use this command after you have successfully build the DockerFile and containers have been created.

    ```bash
    sudo docker-compose up
    ```

-  The instance should now be accessible at http://localhost:8080 (or your configured URL in the .env file).

  
    Use this credentials to login into ProcessMaker:
    - Username: **admin**
    - Password: **admin123**

    Inside the running terminal, `ctrl+c` will gracefully stop all containers without removing them, preserving the changes made during the running process.
