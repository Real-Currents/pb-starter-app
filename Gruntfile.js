'use strict';

module.exports = Grunt;

function Grunt (grunt) {
	
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		bgShell: {
			_defaults: {
				bg: true,
                fail: true,
                stdout: false
			},
			karma: {
				cmd: 'karma start'
			},
			serve: {
				cmd: 'http-server build'
			}
		},
        exec: {
			build: {
				cmd: 'gulp build'
			}
        }
	});
    
    grunt.config('watch', {
        "scripts": {
			files: [
				"./app/*",
				"./app/**/*",
				"./app/**/*.html",
				"./app/**/**/*.html",
				"./app/**/**/**/*.html",
				"./app/**/*.js",
				"./app/**/**/*.js",
				"./app/**/**/**/*.js",
				"./app/**/*.sass",
				"./app/**/**/*.sass",
				"./app/**/**/**/*.sass",
				"./app/**/*.scss",
				"./app/**/**/*.scss",
				"./app/**/**/**/*.scss",
				"./app/**/*.svg",
				"./app/**/**/*.svg",
				"./app/**/**/**/*.svg"
			],
			tasks: [ "exec:build" ],
			options: {
				spawn: false,
			}
        }
    });
    
    // Default task
	grunt.registerTask("default", [ "build", "serve" ]);

	// Build with gulp
	grunt.registerTask("build", [ "exec:build" ]);

	// Serve with http-server-cgi
	grunt.registerTask("serve", [ "bgShell:serve", "watch" ]);

	// Test with karma
	grunt.registerTask("test", [ "bgShell:karma", "watch" ]);
}
