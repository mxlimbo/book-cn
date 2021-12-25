<!--
function LayerMove(yyleft,yytop,yyfnx,yyfny,yydiv,yybilder,yyloop,yyto,yycnt,yystep) 
 { 
 if ((document.layers)||(document.all)){
  with (Math) {yynextx= eval(yyfnx)}
  with (Math) {yynexty= eval(yyfny)}
  yycnt=(yyloop && yycnt>=yystep*yybilder)?0:yycnt+yystep;
  if (document.layers){
    eval(yydiv+".top="+(yynexty+yytop))
    eval(yydiv+".left="+(yynextx+yyleft))
  }
  if (document.all){
    eval("yydiv=yydiv.replace(/.layers/gi, '.all')");
    eval(yydiv+".style.pixelTop="+(yynexty+yytop));
    eval(yydiv+".style.pixelLeft="+(yynextx+yyleft));
  }
  argStr='LayerMove('+yyleft+','+yytop+',"'+yyfnx+'","'+yyfny+'","'+yydiv+'",'+yybilder+','+yyloop+','+yyto+','+yycnt+','+yystep+')';
  if (yycnt<=yystep*yybilder)
  {
  eval(yydiv+".yyto=setTimeout(argStr,yyto)");}
  }

}
function Mousetrace(evnt) { 
 if (yyns4)
  {if (evnt.pageX) {ml=evnt.pageX;  mt=evnt.pageY;}  }
 else{
   ml=(event.clientX + document.body.scrollLeft);
   mt=(event.clientY + document.body.scrollTop);
 }
 if (tracescript)eval(tracescript)
}
//-->