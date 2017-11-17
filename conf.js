exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off',
                '--window-size=1360,768',
                'disable-infobars=true',
                'incognito',
                '--start-fullscreen'
            ],
            prefs: {
                'download': {
                    'default_directory': 'c:/'
                }
            }
        }
    },
    specs: ['specs/**/*.e2e-spec.js'],    
    suites: {        
        productions: 'specs/productions.e2e-spec.js'
    },
    params: {
        randomValues: {
            multiple: 8999,
            adds: 1000
        },
        visibilityWaitingTime: {
            fileDownloading: 30000,
            elementDrawing: 8000
        },
        downloading: {
            path: 'c:/report.xlsx'
        }
    }
};