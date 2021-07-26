var input = document.querySelector('input');
var btn = document.querySelector('button');
var todolist = document.querySelector('.todolist');

function addtodo(){
  if (input.value!=''){
  var newTodo = document.createElement('div');
  newTodo.innerHTML = '<br>'+input.value+'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + '<br>';
  const btn1 = document.createElement('BUTTON');
  const c = document.createTextNode('DONE');
  btn1.appendChild(c);
  const btn2 = document.createElement('BUTTON');
  const d = document.createTextNode('DELETE');
  btn2.appendChild(d);
  newTodo.appendChild(btn1);
  newTodo.innerHTML= newTodo.innerHTML + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'
  newTodo.appendChild(btn2);
  todolist.appendChild(newTodo);
  btn1.addEventListener('click',()=>{
    var close = this.parentElement;
    close.style.textDecoration = 'lineThrough'
  })
  btn2.addEventListener('click',()=>{ 
    todolist.removeChild(newTodo);
  })
  }
  else{ 
    alert('ADD SOME TASK');
  }
}

