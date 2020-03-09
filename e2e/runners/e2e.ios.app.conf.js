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
        platformName: 'iOS',
        maxInstances: 1,
        'appium:deviceName': 'iPhone X',
        'appium:platformVersion': '12.2',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        'appium:app': join(process.cwd(), './apps/ios/NativeDemoApp-0.2.1.app.zip'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
