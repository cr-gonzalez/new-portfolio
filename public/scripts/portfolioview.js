'use strict';

const portfolioView = {};

portfolioView.handleNav = function(e) {
  $('.navbar').on('click', '.nav-item', function(){
    $('.tab-content').hide();
    console.log('test')
    $('#' + $(this).data('content')).fadeIn();
    console.log(' in theory this should work')
  });
  $('#sideNav .nav-item:first').click();
  console.log('???')
};
console.log('balls')

portfolioView.handleNav();
