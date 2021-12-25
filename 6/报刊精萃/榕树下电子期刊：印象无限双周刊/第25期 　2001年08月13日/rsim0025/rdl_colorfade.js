
var iR1,iG1,iB1;    /* ���彥��ĳ�ʼ��ɫ��RGBֵ */
var iR2,iG2,iB2;    /* ���彥���Ŀ����ɫ��RGBֵ */
var oTo;    /* ���彥���Ŀ����� */
var iTo=1;    /* ���彥�������0-����ɫ;1-ǰ��ɫ;2-�߿�ɫ */
var bFadeEnd=true;  /* ����ʱ��⽥���Ƿ���� */



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
doPreSetColor();    /* �ڼ�����һ������Ľ���ǰ����Ѹ����ɵ�ǰ����Ľ��仹ԭ */

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
'Ŀǰ��ʱװҵ���ѳ�Ϊ����������������������������³´�л������ҵ֮һ���ڶ����ʦ�쵼ʱ�еĵ�λ�Ƴ�֮���Ľ��գ�ȫ���綼�ڹ�ע��װ�������ҵ��<br>���ڻعˡ����ѷ��ơ���',
'ʮ����ǰ��̨�壬��������˴�̨���ܵ��޴���У԰�ݳ���ĺ�̨���ҵ��޴��ӣ�վ�����̨������ʷ��Ӱ������һ���˵ĸ�����ǰ��<br>��˵���һᳬ���㡣�����������˭��',
'�������ǵı�����Ŀ�����ǽ�Ϊ���Ƽ�������Ʒ����һ�δ�����ҵ��ǣ�<br>���������⡷��������Beatles������ߣ���һƬ��������һ�������衷�������ǰ�',
'��λ�ӡ֤�ڡ�ָ����������֡��������ǣ���į�벻���˽��˽�����磬��������ĳЩ�Ⱥõ����顢���ԣ�����ͬ���ĵ���������ڡ�'
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