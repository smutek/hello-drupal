(function ($, Drupal, window, document) {
  'use strict';

  // Example of Drupal behavior loaded.
  Drupal.behaviors.themeJS = {
    attach: function (context, settings) {
      if (typeof context['location'] !== 'undefined') { // Only fire on document load.

        /* code goes here */
        alert('Hi, yes, it is working.');
      }
    }
  };
})(jQuery, Drupal, this, this.document);
