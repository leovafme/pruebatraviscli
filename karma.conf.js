// // Karma configuration file, see link for more information
// // https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma'),
      require('karma-coverage'),
    ],
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    customLaunchers: {
        // chrome setup for travis CI using chromium
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: [' — no-sandbox']
        }
    },
    preprocessors: {
      './src/test.ts': ['angular-cli','coverage']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    coverageReporter: {
      reporters:[
        {type: 'json', subdir: '.', file: 'coverage-final.json'}
      ]
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'karma-remap-istanbul', 'coverage']
              : ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};