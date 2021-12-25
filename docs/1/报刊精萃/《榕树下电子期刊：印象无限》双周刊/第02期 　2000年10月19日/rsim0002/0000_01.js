function overit(n){
document.all['toc'+n].style.filter='invert';
document.all['img'+n].style.filter='Gray';
}

function exitit(n){
document.all['toc'+n].style.filter='';
document.all['img'+n].style.filter='';
}
