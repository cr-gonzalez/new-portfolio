(function(module){
  var githubController = {};

  githubController.reveal = function() {
    $('main > div').hide();
    $('#github').fadeIn();
  };
  module.githubController = githubController;
})(window);
