module.exports = function(grunt) {
  grunt.initConfig({
    'download-atom-shell': {
      version: '0.20.3',
      outputDir: 'my-dependencies'
    }
  });

  grunt.loadNpmTasks('grunt-download-atom-shell');

  grunt.registerTask('default', ['download-atom-shell']);
};