// ==UserScript==
// @name         Canvas Action Log Blocker
// @namespace    Canvas Action Log Blocker v1.0
// @version      1.1
// @description  A small bruteforce script that prevents Canvas detecting you leaving the quiz taking page
// @downloadURL  https://github.com/drieda/CanvasActionLogBlocker/raw/main/CanvasLogBlocker.user.js
// @author       drieda
// @include      https://canvas*/quizzes/*/take
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

    /*
        For not knowing whether some function reenables the event listeners or not
        the script attempts to remove them every 0.1s
        It is a bruteforce script anyway
    */
   console.log('Using Action Log Blocker');

  setInterval(() => {
    //Focus and blur are the 2 events canvas listens to
    $(window).off('focus');
    $(window).off('blur');

    //For safety reasons the script disables the focusout event listener too
    $(window).off('focusout');

    console.log('listeners removed');
  }, 100);

  $(document).ready(() => {
    let cssObj = {
      position: 'fixed',
      bottom: '0',
      right: '0',
      marginRight: '1%',
      marginBottom: '0.5%',
      fontSize: '1.5rem',
      opacity: '50%',
      zIndex: '1000',
    };

    $("<div id='formFiller'>Action Log Blocker is Running on This Page<div>")
      .insertBefore('#wrapper #main')
      .css(cssObj);
  });
})();
