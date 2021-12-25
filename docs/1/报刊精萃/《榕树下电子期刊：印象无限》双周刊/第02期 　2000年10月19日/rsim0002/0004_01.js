function overit(n){
exitit();
document.all[n].style.display="";
}

function exitit(){
document.all['img1'].style.display="none";
document.all['img2'].style.display="none";
document.all['img3'].style.display="none";
document.all['img4'].style.display="none";
document.all['img5'].style.display="none";
}

function initit(){
overit('img1');
}

