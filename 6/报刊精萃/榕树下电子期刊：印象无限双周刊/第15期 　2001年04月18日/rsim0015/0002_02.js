function show(it){
document.all[it].style.display="";
}

function hide(it){
document.all[it].style.display="none";
}

function hideall(){
hide('label1');hide('label2');hide('label3');hide('label4');hide('label5');hide('label6');
}

function wingoto(it){
parent.middle1.location.href=it;
}