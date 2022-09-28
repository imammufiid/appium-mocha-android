exports.config = {
    specs: [
        'test/specs/**/*.js'
    ],
    path: "/wd/hub",
    port: 4723,
    capabilities: [{
        platformName: "android",
        appPackage: "id.or.yagasu.dbm",
        appActivity: ".main.MainActivity",
        automationName: "UiAutomator2",
        newCommandTimeout: "3600",
        noReset: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};