(function(module){
  var educationController = {};

  educationController.reveal = function() {
    $('main > div').hide();
    $('#education').fadeIn();
  };
  module.educationController = educationController;
})(window);
