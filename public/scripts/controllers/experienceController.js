(function(module){
  var experienceController = {};

  experienceController.reveal = function() {
    $('main > div').hide();
    $('#experience').fadeIn();
  };
  module.experienceController = experienceController;
})(window);
