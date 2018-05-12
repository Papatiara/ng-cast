angular.module('video-player')
  .component('videoListEntry', {
  // TODO
    bindings: {
      video: '<',
      onClick: '<',
    },
    templateUrl: 'src/templates/videoListEntry.html',
  });
