var box = document.getElementById("outerBox").querySelectorAll(".box");
var booked = document.querySelector(".bookedSeat");
var remaining = document.querySelector(".remainingSeat");
booked.innerHTML = 0;
remaining.innerHTML = 36;
box[3].style.backgroundColor = 'red';

window.onload = function() {
  Click();
}

function Click(){
	for(var i=0; i<=box.length; i++){
		console.log(i);
		(box[i]).addEventListener('click', function(){
			if(box[i].style.backgroundColor == "white"){ 
				box[i].style.backgroundColor = "black";
			}
			else{ 
				box[i].style.backgroundColor = "white";
			}
		})
	}
}
