// ==UserScript==
// @name         Random Post Button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Brings you to a random post
// @author       PhantomLuigi
// @match        https://tbgforums.com/forums/index.php
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjpERaAppP79KwCPOUXpuQUAysjybXTWCvrUjvqE1sw&s
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $ = document.querySelector.bind(document);

    $('body').insertAdjacentHTML('beforeend', init_css() );

    var min = 1
    var max = 671710
    var x = 0

    setTimeout(() => {
        //setTimeout needed to allow a few ms for the new Btn to be injected onto page
        $('#random').addEventListener('click', () => {
            x = Math.random() * (max - min + 1) + min;
            window.open("https://tbgforums.com/forums/viewtopic.php?pid=" + x);
        });
    },500);
})();
function init_css(){
    return `
    <button id="random">Random Post</button>
    <style>
        #random{position:absolute;top:101px;left:65%;height:45px;width:140px;}
        #random{background:#565656;color:white;padding-top:10px;text-align:center;}
        #random{z-index:88888;}
    </style>
    `;
}