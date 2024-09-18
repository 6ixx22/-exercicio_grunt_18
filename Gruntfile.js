module.exports = function(grunt) {
  grunt.initConfig({
    
    less: {
      development: {
        options: {
          compress: false  
        },
        files: {
          "css/styles.css": "less/main.less"
        }
      },
      production: {
        options: {
          compress: true 
        },
        files: {
          "css/styles.min.css": "less/main.less"
        }
      }
    },
    
    uglify: {
      options: {
        mangle: false, 
        compress: true  
      },
      my_target: {
        files: {
          "js/scripts.min.js": ["js/scripts.js"] 
        }
      }
    },

    watch: {
      styles: {
        files: ['less/**/*.less'], 
        tasks: ['less:development'], 
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['js/**/*.js'], 
        tasks: ['uglify'], 
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:development', 'uglify']);
  grunt.registerTask('prod', ['less:production', 'uglify']);
};
