<?php

namespace ProcessMaker\Upgrades;

use Illuminate\Database\Migrations\Migration;

abstract class UpgradeMigration extends Migration
{
    /**
     * Run any validations/pre-run checks to ensure the environment, settings,
     * packages installed, etc. are right correct to run this upgrade.
     *
     * Throw a \RuntimeException if the conditions are *NOT* correct for this
     * upgrade migration to run. If this is not a required upgrade, then it
     * will be skipped. Otherwise the exception thrown will be caught, noted,
     * and will prevent the remaining migrations from continuing to run.
     *
     * Returning void or null denotes the checks were successful.
     *
     * @return void
     *
     * @throws \RuntimeException
     */
    public function preflightChecks()
    {
        //
    }

    /**
     * Run the upgrade migrations.
     *
     * @return void
     */
    public function up()
    {
        //
    }

    /**
     * Reverse the upgrade migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
