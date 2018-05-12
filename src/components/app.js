angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = {};
      this.selectVideo = function(video) {
        this.currentVideo = video;
      }.bind(this);
      this.searchResults = function(query) {
        youTube.search(query, function(data) {
          this.videos = data;
        }.bind(this));
        console.log(this.videos);
      }.bind(this);
    // this.getData = function(data) {
    //   this.videos = data;
    // }.bind(this);
    },
    templateUrl: 'src/templates/app.html'
  });
