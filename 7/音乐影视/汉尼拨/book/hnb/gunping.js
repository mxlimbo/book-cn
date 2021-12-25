var gunping,sudu;
function initialize()
{
sudu=setInterval("scrollwindow()",180);
}
function sc(){
clearInterval(sudu);
}
function scrollwindow()
{
gunping=document.body.scrollTop;
window.scroll(0,++gunping);
if (gunping != document.body.scrollTop)
sc();
}
document.onmousedown=sc
document.ondblclick=initialize