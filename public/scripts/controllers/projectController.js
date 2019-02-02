(function(module){
  var projectController = {};

  projectController.reveal = function() {
    $('main > div').hide();
    $('#projects').fadeIn();
  };
  module.projectController = projectController;
})(window);
