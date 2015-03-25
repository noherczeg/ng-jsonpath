module.exports = function (grunt) {
    grunt.initConfig({
        'bower': {
            'install': {
                'options': {
                    'targetDir': './bower_components'
                }
            }
        },
        'karma': {
            'options': {
                'configFile': 'karma.conf.js'
            },
            'test': {
                'reporters': ['progress']
            }
        },
        'ngmin': {
            'dist': {
                'src': 'dist/ng-jsonpath.js',
                'dest': 'dist/ng-jsonpath.js'
            }
        },
        'uglify': {
            'dist': {
                'options': {
                    'compress': {
                        unused: false
                    },
                    'preserveComments': 'some'
                },
                'files': {
                    'dist/ng-jsonpath.min.js': 'dist/ng-jsonpath.js'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', [
        'bower:install',
        'karma:test'
    ]);

    grunt.registerTask('build', [
        'ngmin',
        'uglify'
    ]);

    grunt.registerTask('dist', [
        'build',
        'test'
    ]);

    grunt.registerTask('default', ['build']);
};
