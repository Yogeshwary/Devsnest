var box = document.getElementById('outerBox').querySelectorAll('.box');
var booked = document.querySelector('.bookedSeat');
var remaining = document.querySelector('.remainingSeat');
booked.innerHTML = 0;
remaining.innerHTML = 36;
//box[3].style.backgroundColor = 'red';

window.onload = function() {
  ClickHandler();
}

function click(event) {
  if(box[this.id].style.backgroundColor === #ffffff){ 
    box[this.id].style.backgroundColor = #000000;
    booked.innerHTML =++booked.innerHTML;
    remaining.innerHTML = remaining.innerHTML-1;    
  }
  else{ 
    box[this.id].style.backgroundColor = #ffffff;
    booked.innerHTML = --booked.innerHTML;
    remaining.innerHTML = Number(remaining.innerHTML)+1;
  }
}

function ClickHandler() {
  for (var i = 0; i < box.length; ++i) {
    box[i].id = i;
    box[i].onclick = click;
  }
}
