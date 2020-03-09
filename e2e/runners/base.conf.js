exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
    },
    sync: true,
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://staging.app2.gofan.co',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: [ 'spec' ],

    // ====================
    // Appium Configuration
    // ====================
    services: [ 'appium' ],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        args: {
    
        },
        command : 'appium'
    },

    port: 4723,

    // ====================
    // Hooks to set ES6
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
    },
};
