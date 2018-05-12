angular.module('video-player')

  .component('videoPlayer', {
  // TODO
    bindings: {
      video: '<',
    },
    controller: function() {
      this.url = 'https://www.youtube.com/embed/';
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
