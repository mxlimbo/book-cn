<!--
// Watermark script by Paul Anderson, CNET Builder.com. All rights reserved.

//markW = 107 ;       // Í¼µµµÄ¿í
markW = 120 ;       // Í¼µµµÄ¿í
markH = 50 ;       // Í¼µµµÄ³¤
markX = 100 ;      // percent right
markY = 100 ;      // percent down
markRefresh = 20; // milliseconds

// set common object reference
if (!document.all) document.all = document;
if (!document.all.waterMark.style) document.all.waterMark.style = document.all.waterMark;

wMark = document.all.waterMark.style;
wMark.width = markW;
wMark.height = markH;
navDOM = window.innerHeight; // Nav DOM flag
 
function setVals() {
 barW = 0; // scrollbar compensation for PC Nav
 barH = 0;
 if (navDOM) {
  if (document.height > innerHeight) barW = 20;
  if (document.width > innerWidth) barH = 20;
  } else {
  innerWidth = document.body.clientWidth;
  innerHeight = document.body.clientHeight;
  }
 posX = ((innerWidth - markW)-barW) * (markX/100);
 posY = ((innerHeight - markH)-barH) * (markY/100);
 }

function wRefresh() {
 wMark.left = posX + (navDOM?pageXOffset:document.body.scrollLeft);
 wMark.top = posY + (navDOM?pageYOffset:document.body.scrollTop);
 }

function markMe() {
 setVals();
 window.onresize=setVals;
 markID = setInterval ("wRefresh()",markRefresh);
 }

function show() {
  waterMark.style.display='inline';
}

function hide() {
  waterMark.style.display='none';
}

window.onload=markMe; // safety for Mac IE4.5

//-->
