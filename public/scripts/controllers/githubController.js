(function(module){
  var githubController = {};

  githubController.reveal = function() {
    $('main > div').hide();
    // $('#github').fadeIn();
    repos.requestRepos(githubView.index);
  };
  module.githubController = githubController;
})(window);
