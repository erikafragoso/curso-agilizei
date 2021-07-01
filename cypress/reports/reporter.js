const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Ap Name": "Demo automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Ubuntu 20.04",
        "Executed": "Local"
    }
};

reporter.generate(options)