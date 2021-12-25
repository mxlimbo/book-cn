<!--
var isNS = (navigator.appName == "Netscape");     
layerRef = (isNS) ? "document" : "document.all";     
styleRef = (isNS) ? "" : ".style";     
     
var queue = new Array();     
     
var NUM_OF_TRAIL_PARTS = 5     
     
for (x=1; x < 6; x++) { ///////////////Image Preload     
eval("trailSpriteFrame" + x + " = new Image(36,36);");     
eval("trailSpriteFrame" + x + ".src = 'images/trailgif" + x + ".gif';");      
}     
     
////////////////////////////////////////////////The trail Object     
     
function trailSpriteObj(anID) {     
this.trailSpriteID = "trailSprite" + anID; //as before      
this.imgRef = "trailSprite" + anID + "img"; //reference to the sprites image name     
this.currentFrame = 1; //the varible for looking after the frame     
this.animateTrailSprite = animateTrailSprite; //declare the objects method cycle     
}     
     
function animateTrailSprite() {     
if (this.currentFrame <6 ) { //if there are animation frames left, the change sprites the current frame     
if (isNS) { //Detect the browser and perform coresponding image switch     
eval("document." + this.trailSpriteID +".document['"+ this.imgRef + "'].src = trailSpriteFrame" + this.currentFrame + ".src");     
} else {     
eval("document['" + this.imgRef + "'].src = trailSpriteFrame" + this.currentFrame + ".src");     
}     
this.currentFrame ++; //and increase the objects current frame      
} else { //the current frame has reached its limit so hide the sprite     
eval(layerRef + '.' + this.trailSpriteID + styleRef + '.visibility = "hidden"');     
}      
}     
     
/////////////////////////////////////////////////////////////////     
     
function processAnim() {     
for(x=0; x < NUM_OF_TRAIL_PARTS; x++)     
queue[x].animateTrailSprite();     
}     
     
function processMouse(e) {     
currentObj = shuffleQueue();     
if (isNS) {     
eval("document." + currentObj + ".left = e.pageX - 10 ;");     
eval("document." + currentObj + ".top = e.pageY + 10;");     
} else {     
eval("document.all." + currentObj + ".style.pixelLeft = event.clientX + document.body.scrollLeft - 10 ;");     
eval("document.all." + currentObj + ".style.pixelTop = event.clientY + document.body.scrollTop + 10;");     
}     
}     
     
function shuffleQueue() {     
lastItemPos = queue.length - 1;     
lastItem = queue[lastItemPos];     
for (i = lastItemPos; i>0; i--)      
queue[i] = queue[i-1];     
queue[0] = lastItem;     
     
queue[0].currentFrame = 1; //reset the objects frame number & make the sprite visible again     
eval(layerRef + '.' + queue[0].trailSpriteID + styleRef + '.visibility = "visible"');      
     
return queue[0].trailSpriteID;     
}     
     
function init() {     
     
for(x=0; x<NUM_OF_TRAIL_PARTS; x++) //fill array with trail objects     
queue[x] = new trailSpriteObj(x+1) ;     
     
if (isNS) { document.captureEvents(Event.MOUSEMOVE); }     
document.onmousemove = processMouse;     
     
setInterval("processAnim();",25);     
}      
     
window.onload = init;     

//-->


