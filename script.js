var add = document.getElementById('addToDo');
var input = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');

add.addEventListener('click',addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(e){
  
  const item  = input.value;
  const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = item;
		task_input_el.setAttribute('readonly', 'readonly');
        task_input_el.addEventListener('dblclick', function(){
            task_input_el.style.textDecoration = "line-through";
        })
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit','btn','btn-success');
		task_edit_el.type="button";
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete','btn','btn-danger','fa','fa-trash');

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		toDoContainer.appendChild(task_el);

		input.value = '';
    task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			toDoContainer.removeChild(task_el);
		});
}
//console.log(inputtext.innerHTML);

/*var deleteBtn = document.createElement('button');

// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));


add.addEventListener('click',addItem);
inputtext.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputtext.value;
    paragraph.appendChild(deleteBtn);
    toDoContainer.appendChild(paragraph);
    //console.log(paragraph.innerText);
    inputtext.value='';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    deleteBtn.addEventListener('click', removeItem);
    function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        toDoContainer.removeChild(paragraph);
      }
    }
  }
}

*/