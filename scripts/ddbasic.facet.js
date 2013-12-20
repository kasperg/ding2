(function($) {
  // When ready start the magic.
  $(document).ready(function () {

    if ($('.pane-ding-facetbrowser').length) {
      // Create toggle link.
      $('<a />', {
          'class' : 'facet-browser-toggle js-facet-browser-hide',
          'href' : '#toggle-facet-browser',
          'text' : Drupal.t('Limit search results')
      }).prependTo('.primary-content');

      // Move and show filters on click.
      $('.facet-browser-toggle').live('click', function() {
          // Clone facet browser if it does not exist.
          //var facet_browser_clone = $('.facet-browser-responsive');
          $(this).next().toggle();
      });
    }
  });
})(jQuery);
