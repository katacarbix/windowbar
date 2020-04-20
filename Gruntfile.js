module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: './src',
					cssDir: './dist',
					outputStyle: 'compressed'
				}
			}
		},
		browserify: {
			options: {
				debug: true,
				extensions: '.js',
				browserifyOptions: {
					standalone: 'windowbar'
				},
				transform: ['brfs']
			},
			default: {
				files: { 'dist/index.js': ['src/index.js'] }
			}
		},
		watch: {
			css: {
				files: 'src/*.scss',
				tasks: ['compass']
			},
			browserify: {
				files: ['src/*.js', 'dist/*.html', 'dist/*.css'],
				tasks: ['browserify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
