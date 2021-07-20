var box = document.getElementById('outerBox').querySelectorAll('.box');
var booked = document.querySelector('.bookedSeat');
var remaining = document.querySelector('.remainingSeat');
booked.innerHTML = 0;
remaining.innerHTML = 36;

window.onload = function() {
  ClickHandler();
}

function click(event) {
  if(box[this.id].style.backgroundColor == 'black'){ 
    box[this.id].style.backgroundColor = 'white'; 
    booked.innerHTML = --booked.innerHTML;
    remaining.innerHTML = Number(remaining.innerHTML)+1;   
  }
  else{ 
    box[this.id].style.backgroundColor = 'black';
    booked.innerHTML =++booked.innerHTML;
    remaining.innerHTML = remaining.innerHTML-1;
    
  }
}

function ClickHandler() {
  for (var i = 0; i < box.length; ++i) {
    box[i].id = i;
    box[i].onclick = click;
  }
}

//Create 2 object and try to use call, apply and bind on them

const obj1 = { 
  Name:'Shruti' 
};

const obj2 = {
  Name:'Fish'
};

function getInvite(a,b){
  console.log(this);
  console.log(a+b);
}

getInvite.call();

getInvite.call(obj1,30,40);
getInvite.call(obj2,30,40);

getInvite.apply(obj1,[30,40]);

const ab = getInvite.bind(obj1,1,2);
console.log(ab);

