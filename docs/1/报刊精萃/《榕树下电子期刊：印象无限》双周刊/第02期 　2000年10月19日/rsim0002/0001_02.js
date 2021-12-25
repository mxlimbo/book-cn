function overit(o1,o2){
document.all[o1].style.border="1px solid #660033";
document.all[o1].style.fontWeight="normal";
document.all[o1].style.color="#660033";
document.all[o2].style.color="#000000";
}

function exitit(o1,o2){
document.all[o1].style.border="0px none white";
document.all[o1].style.fontWeight="bold";
document.all[o1].style.color="#000000";
document.all[o2].style.color="#003333";
}

function hideall(){
exitit('head1','body1');
exitit('head2','body2');
}

function golink(l1){
top.location=l1;
}