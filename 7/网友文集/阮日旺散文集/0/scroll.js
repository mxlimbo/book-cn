var currentpos,timer;
function initialize()
{ 
timer=setInterval("scrollwindow()",50);
}
function sc(){
clearInterval(timer);
}
function scrollwindow()
{
currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if(currentpos!=document.body.scrollTop)
sc();
}
document.onmousedown=sc
document.ondblclick=initialize