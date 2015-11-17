<<<<<<< .mine
/*
 * With this gruntfile.js you must ONLY EDIT THE JAVASCRIPT files
 * AND THE SASS files, everything else will be done automaticaly
 * and if you edit another file and run the default task, no 
 * changes will be saved.
 */
module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		// Compile sass files
		sass:{
			dist:{
				files:{
					
					'css/home.css': 'sass/home.scss'
				
				}
			}
		},

		// Minify css files and move'em to deploy
		cssmin:{
			my_target:{
				files:[{
					expand:true,
					cwd:'css/',
					src: ['*.css'],
					dest: '../Xdep/css',
					ext: '.min.css'
				}]
			}
		},

		// Minify the javascript files
		uglify:{
			options:{
				manage:false
			},
			my_target:{
				files:{
					'../Xdep/js/scripts.min.js':['js/scripts.js'],
				}
			}
		},

		copy:{
			html:{
				src: '*.html',
				dest: '../Xdep/'
			},
			json:{
				src: 'json/*.json',
				dest: '../Xdep/'
			},
			images:{
				src: ['images/*.png','images/*.jpg','images/*.jpeg'],
				dest: '../Xdep/'
			}
		},

		watch:{
			sass:{
				files:['sass/*.scss'],
				tasks:['sass','cssmin']
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};||||||| .r0
=======
/*
 * With this gruntfile.js you must ONLY EDIT THE JAVASCRIPT files
 * AND THE SASS files, everything else will be done automaticaly
 * and if you edit another file and run the default task, no 
 * changes will be saved.
 */
module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		// Compile sass files
		sass:{
			dist:{
				files:{
					'css/training.css': 'sass/training.scss'
				}
			}
		},

		// Minify css files and move'em to deploy
		cssmin:{
			my_target:{
				files:[{
					expand:true,
					cwd:'css/',
					src: ['*.css'],
					dest: '../Xdep/css',
					ext: '.min.css'
				}]
			}
		},

		// Minify the javascript files
		uglify:{
			options:{
				manage:false
			},
			my_target:{
				files:{
					'../Xdep/js/scripts.min.js':['js/scripts.js'],
				}
			}
		},

		copy:{
			html:{
				src: '*.html',
				dest: '../Xdep/'
			},
			json:{
				src: 'json/*.json',
				dest: '../Xdep/'
			},
			images:{
				src: ['images/*.png','images/*.jpg','images/*.jpeg'],
				dest: '../Xdep/'
			}
		},

		watch:{
			sass:{
				files:['sass/*.scss'],
				tasks:['sass','cssmin']
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};>>>>>>> .r2
