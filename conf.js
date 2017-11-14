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
        home: ['specs/checkbox.e2e-spec.js',
                'specs/input.e2e-spec.js',
                'specs/list.e2e-spec.js'],
        api: 'specs/multilevellist.e2e-spec.js',
        productions: 'specs/productions.e2e-spec.js'
    }
};