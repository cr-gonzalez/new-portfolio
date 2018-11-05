'use strict';

(function(module) {
  const aboutController = {};


  aboutController.reveal = () => {
    $('main > div').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
