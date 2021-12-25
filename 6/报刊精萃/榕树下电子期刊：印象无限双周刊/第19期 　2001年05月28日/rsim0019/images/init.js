document.write("<STYLE TYPE='text/css'>#two{position:absolute;left:0;top:0}<\/STYLE><DIV ID=two><\/DIV>");


/***************************************************************************
							BROWSER DETECTION
***************************************************************************/

   HM_DOM = (document.getElementById) ? true : false;
   HM_NS4 = (document.layers) ? true : false;
    HM_IE = (document.all) ? true : false;
   HM_IE4 = HM_IE && !HM_DOM;
   HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
  HM_IE4M = HM_IE4 && HM_Mac;
HM_IsMenu = (HM_DOM || HM_NS4 || (HM_IE && !HM_IE4M));

function popUp(){return};
function popDown(){return};
function startIt(){return}
if(!HM_IsMenu) event = null;

/***************************************************************************
							IN-PAGE PARAMETERS
***************************************************************************/

HM_PG_MenuWidth = 150;
HM_PG_FontFamily = "Arial,sans-serif";
HM_PG_FontSize = 10;
HM_PG_FontBold = false;
HM_PG_FontItalic = false;
HM_PG_FontColor = "blue";
HM_PG_FontColorOver = "white";
HM_PG_BGColor = "#DDDDDD";
HM_PG_BGColorOver = "#FFCCCC";
HM_PG_ItemPadding = 3;

HM_PG_BorderWidth = 2;
HM_PG_BorderColor = "black";
HM_PG_BorderStyle = "solid";
HM_PG_SeparatorSize = 2;
HM_PG_SeparatorColor = "black";
HM_PG_ImageSrc = "tri.gif";
HM_PG_ImageSize = 5;
HM_PG_ImageHorizSpace = 0;
HM_PG_ImageVertSpace =0;

HM_PG_KeepHilite = true; 
HM_PG_ClickStart = 0;
HM_PG_ClickKill = true;
HM_PG_ChildOverlap = 20;
HM_PG_ChildOffset = 10;
HM_PG_ChildPerCentOver = null;
HM_PG_TopSecondsVisible = .5;
HM_PG_StatusDisplayBuild =1;
HM_PG_StatusDisplayLink = 1;
HM_PG_UponDisplay = null;
HM_PG_UponHide = null;

HM_PG_RightToLeft = false;

//HM_a_TreesToBuild = [];

if (top.bottom) top.bottom.location.href=("../inc/bottom.html");
function start_menu() {
  if (top.bottom) top.bottom.location.href=("../inc/menu.html");
}

if(HM_IsMenu) {
  document.write("<SCRIPT LANGUAGE='JavaScript1.2' SRC='../inc/hierArrays_e.js' TYPE='text/javascript'><\/SCRIPT>");
  document.write("<SCRIPT LANGUAGE='JavaScript1.2' SRC='../inc/hierMenus.js' TYPE='text/javascript'><\/SCRIPT>");
}

