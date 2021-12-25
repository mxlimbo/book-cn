var xx,yy;

if (window.Event)
  document.captureEvents(Event.CLICK);document.onclick = doit;

function doit()
{
 xx = window.event.screenX;
 yy = window.event.screenY;
}

<!--
function showpic(name)
{

  var ff = "width=30,height=25,scrollbars,resizable";
  
  ff += ",left=" + xx ;
  
  if ( yy > (window.screen.height/2) ) { ff += ",top=" + (yy-150) ; }
  else {ff += ",top=" + (yy+10) ;}

  window.open(name,"pic",ff);
}
//-->
