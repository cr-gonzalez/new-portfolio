(function(module){
  var skillsController = {};

  skillsController.reveal = function() {
    $('main > div').hide();
    $('#skills').fadeIn();
  };
  module.skillsController = skillsController;
})(window);
