function IMG_act(imgName) {

imgOn = eval(imgName+"on.src");
document [imgName].src = imgOn;
}
  
function IMG_out(imgName) {

imgOff = eval(imgName+"off.src");
document [imgName].src = imgOff; 
}

function event(address,winw,winh) {
  win1 = window.open('','','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
  win1.resizeTo(winw,winh);
  win1.location.href=address;
  win1.focus();  
}