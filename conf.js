exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1360,768'],
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
    }
};