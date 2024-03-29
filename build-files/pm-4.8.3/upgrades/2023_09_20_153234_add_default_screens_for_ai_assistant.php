<?php

use ProcessMaker\Models\Screen;
use ProcessMaker\Models\ScreenCategory;
use ProcessMaker\Upgrades\UpgradeMigration as Upgrade;

class AddDefaultScreensForAiAssistant extends Upgrade
{
    const SCREENS_PATH = 'processes/screens/';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $this->installScreen('default-ai-form-screen');
        $this->assignToSystemCategory('default-ai-form-screen');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
    }

    /**
     * Install a screen.
     */
    private function installScreen(string $key): Screen
    {
        $path = database_path(self::SCREENS_PATH . "{$key}.json");
        $json = json_decode(file_get_contents($path), true);
        $screen = collect($json['screens'])->first();

        // By default, the screen is initially installed as a system screen.
        unset($screen['categories']);
        $screen['screen_category_id'] = null;

        return Screen::updateOrCreate([
            'key' => $screen['key'],
        ], $screen);
    }

    /**
     * Assign system screens to system category.
     */
    private function assignToSystemCategory(string $key)
    {
        $screens = Screen::where('key', $key)->get();
        $screenCategory = ScreenCategory::firstOrCreate(['name' => 'System', 'is_system' => 1]);

        foreach ($screens as $screen) {
            $screen->categories()->attach([$screenCategory->id]);
        }
    }
}
