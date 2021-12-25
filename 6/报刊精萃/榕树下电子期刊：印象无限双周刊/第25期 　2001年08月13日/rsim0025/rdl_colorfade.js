
var iR1,iG1,iB1;    /* 定义渐变的初始颜色的RGB值 */
var iR2,iG2,iB2;    /* 定义渐变的目标颜色的RGB值 */
var oTo;    /* 定义渐变的目标对象 */
var iTo=1;    /* 定义渐变参数。0-背景色;1-前景色;2-边框色 */
var bFadeEnd=true;  /* 运行时监测渐变是否结束 */



function makearray(n){
this.length=n;
for(var i=1; i<=n; i++) {this[i]=0;}
return this;
}



function hex(i){
if (i<=0) return "00"; else if (i>=255) return "ff"; else return ""+hexa[Math.floor(i/16)]+hexa[i%16];
}



hexa=new makearray(16);
for(var i=0; i<10; i++) hexa[i]=i;
hexa[10]="a"; hexa[11]="b"; hexa[12]="c"; hexa[13]="d"; hexa[14]="e"; hexa[15]="f";



function setColor(r,g,b){

var hr=hex(r); var hg=hex(g); var hb=hex(b);

with (oTo. style) {
switch (iTo) {
case 1: color="#"+hr+hg+hb;break;
case 2: border="1px solid "+"#"+hr+hg+hb;break;
default: backgroundColor="#"+hr+hg+hb;break;
}
} 

}



function doFade(){

if (bFadeEnd) return;
if (iR1==iR2 && iG1==iG2 && iB1==iB2) return;

if (iR1<iR2) {if (iR1!=255) iR1=iR1+1} else {if (iR1!=0 && iR1!=iR2) iR1=iR1-1;}
if (iG1<iG2) {if (iG1!=255) iG1=iG1+1} else {if (iG1!=0 && iG1!=iG2) iG1=iG1-1;}
if (iB1<iB2) {if (iB1!=255) iB1=iB1+1} else {if (iB1!=0 && iB1!=iB2) iB1=iB1-1;}

setColor(iR1,iG1,iB1);
window.setTimeout('doFade()',1);

}



function doFadeIn(oElement){

if (!bFadeEnd)  bFadeEnd=true;
doPreSetColor();    /* 在激发另一个对象的渐变前必须迅速完成当前对象的渐变还原 */

oTo=oElement;
iTo=parseInt(oElement.fade);
iR1=parseInt(oElement.r1);iG1=parseInt(oElement.g1);iB1=parseInt(oElement.b1);
iR2=parseInt(oElement.r2);iG2=parseInt(oElement.g2);iB2=parseInt(oElement.b2); 

bFadeEnd=false;
doFade();

}



function doFadeOut(oElement){

if (!bFadeEnd)  bFadeEnd=true;

oTo=oElement;
iTo=parseInt(oElement.fade);
iR1=parseInt(oElement.r2);iG1=parseInt(oElement.g2);iB1=parseInt(oElement.b2);
iR2=parseInt(oElement.r1);iG2=parseInt(oElement.g1);iB2=parseInt(oElement.b1); 

bFadeEnd=false;
doFade();

}



function doPreSetColor(){

var iR=parseInt(oTo.r1);
var iG=parseInt(oTo.g1);
var iB=parseInt(oTo.b1);

setColor(iR,iG,iB);

}

var arrStr=new Array(
'目前的时装业，已成为与人们生活最贴近、吞吐量最大、新陈代谢最快的行业之一。在对设计师领导时尚的地位推崇之至的今日，全世界都在关注服装这个大行业。<br>本期回顾《霓裳风云》。',
'十几年前的台湾，这个年轻人从台下跑到罗大佑校园演唱会的后台，找到罗大佑，站在这个台湾音乐史上影响整整一代人的歌者面前。<br>他说：我会超过你。……这个人是谁？',
'这是我们的保留栏目，我们将为您推荐精彩作品。这一次带给大家的是：<br>《爱的释意》《可怜的Beatles》《天边，那一片淡蓝》《一个人跳舞》《我与风前语》',
'这段话印证于《指望》或《牯岭街》的少年们，落寞与不被了解的私隐世界，夹杂著对某些嗜好的锺情、入迷，有著同样的单纯梦想存在。'
);

function setContent(iC){
oTo.innerHTML=arrStr[parseInt(iC)];
}

function doPreSet(oElement){

oTo=document.all('rdlShit');
iTo=parseInt(oTo.fade);
doPreSetColor();
oElement.onmouseover=new Function('setContent(this.title);doFadeIn(oTo);');
oElement.onmouseout=new Function('doFadeOut(oTo);');


}


/* Part of RDL(TM) - Written by Rain1977 */
/* HomeSite: http://www.dhtmlet.com  E-Mail: rainer@mail.hf.ah.cn */