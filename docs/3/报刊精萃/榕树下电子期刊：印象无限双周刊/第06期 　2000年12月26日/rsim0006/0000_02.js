function overit(it,pic,note){
document.all[note].style.display="";
document.all[it].style.width="70px";
}

function exitit(it,pic,note){
document.all[it].style.width="26px";
document.all[note].style.display="none";
}

function hideall(){
exitit('menu1','img1','note1');
exitit('menu2','img2','note2');
exitit('menu3','img3','note3');
exitit('menu4','img4','note4');
exitit('menu5','img5','note5');
}
