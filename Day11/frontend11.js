
function answer(){
  names.forEach ((item)=>{
    var ele = document.getElementsByName(item);
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
          console.log(ele[i]);
          if(ele[i].value=='right'){
            marks+=1;
            var id = ele[i].id;
	    console.log(id);
            document.getElementById(id).setAttribute("style", "color: red;")
          }
        }
    }

  })
  Marks();
}

var marks=0;
names=['creator','emoticon','currancy','lang','ext'];



function Marks(){
  document.getElementById('ques1').innerHTML='CORRECT ANSWER: Bjarne Stroustrup';
  document.getElementById('ques2').innerHTML='CORRECT ANSWER: The Humble Smiley';
  document.getElementById('ques3').innerHTML='CORRECT ANSWER: Blockchain';
  document.getElementById('ques4').innerHTML='CORRECT ANSWER: Java Script';
  document.getElementById('ques5').innerHTML='CORRECT ANSWER: .html';

}

