// ==UserScript==
// @name         Random Post Button for Oxygen Theme
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Brings you to a random post
// @author       PhantomLuigi
// @match        https://tbgforums.com/forums/index.php
// @match        https://tbgforums.com/forums/
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjpERaAppP79KwCPOUXpuQUAysjybXTWCvrUjvqE1sw&s
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $ = document.querySelector.bind(document);

    $('body').insertAdjacentHTML('beforeend', init_css() );

    var min = 1
    var max = 700000
    var x = 0

    setTimeout(() => {
        //setTimeout needed to allow a few ms for the new Btn to be injected onto page
        $('#random').addEventListener('click', () => {
            x = Math.round (Math.random() * (max - min + 1)) + min;
            window.open("https://tbgforums.com/forums/viewtopic.php?pid=" + x + "#p" + x);
        });
    },500);
})();
function init_css(){
    return `
    <button id="random">Random Post</button>
    <style>
        #random{position:absolute;top:71px;left:65%;height:25px;width:130px;}
        #random{background:#0066B9;color:white;padding-top:0px;text-align:center;}
        #random{z-index:0;}
    </style>
    `;
}
