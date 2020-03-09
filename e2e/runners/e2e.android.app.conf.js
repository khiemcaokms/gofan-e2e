const { join } = require('path');
const { config } = require('./base.conf');

// ============
// Specs
// ============
config.specs = [
    './e2e/specs/**/*.spec.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Nexus6_ver8',
        'appium:platformVersion': '8.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/android/NativeDemoApp-0.2.1.apk'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
