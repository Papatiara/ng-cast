angular.module('video-player')

  .component('search', {
  // TODO
    controller: function() {
      this.data = '';
    },
    templateUrl: 'src/templates/search.html',
    bindings: {
      search: '<',
    }
  });
