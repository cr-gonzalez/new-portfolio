'use strict';

(function(module) {
  const aboutController = {};


  aboutController.reveal = () => {
    $('main > div').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
