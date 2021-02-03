// ==UserScript==
// @name         Canvas Action Log Blocker
// @namespace    Canvas Action Log Blocker v1.0
// @version      1.0
// @description  A small bruteforce script that prevents Canvas detecting you leaving the quiz page
// @downloadURL  https://github.com/drieda/CanvasActionLogBlocker/blob/main/CanvasLogBlocker.js
// @author       drieda
// @match        https://{-YOUR_INSTITUTE_URL-}/*/quizzes/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Using Action Log Blocker');

    /*
    For not knowing whether some function reenables the event listeners or not
    the script attempts to remove them every 0.1s

    It is a bruteforce script anyway
    */
    setInterval(() => {
        //Focus and blur are the 2 events canvas listens to
        $(window).off('focus');
        $(window).off('blur');

        //For safety reasons the script disables the focusout event listener too
        $(window).off('focusout');

        console.log('listeners removed');
    }, 100);

})();
