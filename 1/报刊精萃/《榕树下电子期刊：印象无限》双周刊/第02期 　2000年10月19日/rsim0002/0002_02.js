function high(which2){
exitit()
which2.style.display=""
theobject=which2
highlighting=setInterval("highlightit(theobject)",25)
}

function low(which2){
clearInterval(highlighting)
which2.filters.alpha.opacity=15
}

function highlightit(cur2){
if (cur2.filters.alpha.opacity<100)
cur2.filters.alpha.opacity+=5
else if (window.highlighting)
clearInterval(highlighting)
}

function exitit(){
document.all['td2'].style.display="none";
document.all['td3'].style.display="none";
document.all['td4'].style.display="none";
}

function initit(){
exitit();
high(document.all['td3']);
low(document.all['td3']);
}

