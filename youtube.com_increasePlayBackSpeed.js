// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://tampermonkey.net/index.php?version=3.12&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

setTimeout(function(){
  var video = document.querySelector('video');
  video.playbackRate = 3;
}, 3000);
