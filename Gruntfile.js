module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/*', 'cov/*', 'test/testem.tap'],
    jshint: {
      all: ['src/*.js'],
      options: {
        devel: true
      }
    },
    concat: {
      build: {
        files: {
          'dist/<%= pkg.name %>.js': [
            'src/superb.js',
            'src/impressive.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    testem: {
      options: {
        launch_in_ci: ['PhantomJS']
      },
      'test/testem.tap': ['test/*.html']
    },
    "qunit-cov": {
      test: {
        minimum: 0.9,
        srcDir: 'src',
        depDirs: ['test'],
        outDir: 'cov',
        testFiles: ['test/*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-testem');
  grunt.loadNpmTasks('grunt-qunit-cov');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'testem', 'clean', 'qunit-cov']);
  grunt.registerTask('jenkins', ['jshint', 'testem', 'clean', 'qunit-cov', 'concat', 'uglify']);
};
