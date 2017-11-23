var downloadsPath = __dirname;

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
                    'prompt_for_download': false,
                    'default_directory': downloadsPath
                }
            }
        }
    },
    specs: ['specs/**/*.e2e-spec.js'],    
    suites: {        
        productions: 'specs/productions.e2e-spec.js'
    },
    params: {
        baseUrl: 'http://vtest16:8093/catalog-planning/#/productionsEditor',
        randomValues: {
            from: 1111,
            to: 9999
        },
        visibilityWaitingTime: {
            fileDownloading: 30000,
            elementDrawing: 8000
        },
        downloading: {
            path: downloadsPath,
            fileName : '/report.xlsx'
        }
    }
};