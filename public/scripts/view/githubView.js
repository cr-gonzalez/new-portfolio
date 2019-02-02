'use strict';

(function(module) {
  const githubView = {};

  const ui = function() {
    let $github = $('#github');

    $github.find('ul').empty();
    $github.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  githubView.index = function() {
    ui();

    $('#github ul').append(
      repos.with('name').map(render)
    );
  };

  module.githubView = githubView;
})(window);
