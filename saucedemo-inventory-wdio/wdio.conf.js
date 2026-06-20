export const config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 2,

    capabilities: [
        {
            browserName: 'firefox'
        },
        {
            browserName: 'MicrosoftEdge'
        }
    ],

    logLevel: 'info',
    bail: 0,

    baseUrl: 'https://www.saucedemo.com/',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};