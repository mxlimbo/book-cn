if (document.images)
var staticlogo=new Image(116,42)
staticlogo.src="images/index_01.gif"
var logolink="http://magazine.rongshu.com/"

function regenerate(){
window.location.reload()
}
function regenerate2(){
if (document.layers)
window.onresize=regenerate
}


if (document.all)
document.write('<span id="logo" style="position:absolute;top:100;width:'+staticlogo.width+';height:'+staticlogo.height+'"></span>')

function createlogo(){
staticimage=new Layer(100)
staticimage.left=-300
staticimage.top=120
staticimage.document.write('<a href="'+logolink+'"><img src="'+staticlogo.src+'" border=0 ></a>')
staticimage.document.close()
staticimage.visibility="show"
regenerate2()
logoit2()
}

if (document.layers)
window.onload=createlogo;

if (document.all){
w=document.body.clientWidth-logo.style.pixelWidth-5
h=2
logo.style.left=w
logo.style.top=h
}

function logoit(){
var w2=document.body.scrollLeft+w
var h2=document.body.scrollTop+h
logo.style.left=w2
logo.style.top=h2
}
function logoit2(){
staticimage.left=pageXOffset+window.innerWidth-staticimage.document.width-15
staticimage.top=pageYOffset+2
}

function insertimage(){
logo.innerHTML='<a href="'+logolink+'"><img src="'+staticlogo.src+'" border=0></a>'
}

if (document.all){
window.onscroll=logoit
window.onresize=new Function("window.location.reload()")
window.onload=insertimage
}