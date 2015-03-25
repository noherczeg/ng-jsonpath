module.exports = function (config) {
    config.set({
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/ng-jsonpath.min.js',
            'test/ng-jsonpath.spec.js'
        ],
        exclude: [],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        port: 9876,
        runnerPort: 9100,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: true
    });
};
