var eOpenMenu = null;

function OpenMenu(eSrc,eMenu) {
 eMenu.style.left = eSrc.parentElement.offsetLeft + divMenuBar.offsetLeft;
 eMenu.style.top = divMenuBar.offsetHeight + divMenuBar.offsetTop;
 eMenu.style.visibility = "visible";
 eOpenMenu = eMenu;
}

function CloseMenu(eMenu) {
 eMenu.style.visibility = "hidden";
 eOpenMenu = null;
}

function MenuBar_over() {
 var eSrc = window.event.srcElement;
 if ("SPAN" == eSrc.tagName.toUpperCase()) {
  var eMenu = document.all[eSrc.parentElement.id.replace("tdMenuBarItem","divMenu")];
  if (eOpenMenu && eOpenMenu != eMenu) { CloseMenu(eOpenMenu); }
  if (eMenu) { OpenMenu(eSrc,eMenu); }
 }
}

function MenuBar_out() {
 var eTo = window.event.toElement;
 if (eOpenMenu && eTo && !eOpenMenu.contains(eTo) && "tblMenuBar" != eTo.id) { CloseMenu(eOpenMenu) }
}

function Menu_out() {
 var eSrc = window.event.toElement;
 if (eOpenMenu && !eOpenMenu.contains(eSrc) && !divMenuBar.contains(eSrc)) { CloseMenu(eOpenMenu) }
}