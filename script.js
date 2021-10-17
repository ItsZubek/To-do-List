const ulEl = document.getElementById('formID');
const inputEl = document.getElementById('textinput');
const liEl = document.getElementsByTagName("li");

function AddItem(event) {
	event.preventDefault();
	const todosEl = document.getElementById("todos");
	if(inputEl.value.length > 0) 
	{
		const listElement = document.createElement("li");
		listElement.appendChild(document.createTextNode(inputEl.value));
		//Cross out 
 		listElement.addEventListener("click", function() {
		listElement.classList.toggle("crossedoff");
 		});
 		//Delete
 		listElement.addEventListener("contextmenu", function(event) {
 			event.preventDefault();
 			listElement.remove();
 		});
		todosEl.appendChild(listElement);
		inputEl.value = '';
	}
}
ulEl.addEventListener("submit", AddItem);

//TODO:
//ADD PRIORITY
//ADD FILE SAVING
//add button to delete??***
