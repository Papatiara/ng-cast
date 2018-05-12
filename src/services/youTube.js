angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.search = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: query,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video'
        }
      }).then(function successCallback(response) {
        console.log('success!');
        callback(response.data.items);
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        console.log('error');
      });
    };
  });
