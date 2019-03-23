var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Check the length of the input field
function inputLength() {
	return input.value.length;
}

//chek the length of li elements
function checkList(){
  return document.getElementsByTagName('li').length;
}

// Create a new list item and add to dom
function createListElement() {
	var li = document.createElement("li");
	li.classList.add("listItem");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", crossOfCompletedItems)
	ul.appendChild(li);
	input.value = "";

// Add a delete button to list item
	var delbtnText = "X"
	var delbtn = document.createElement("button");
	delbtn.classList.add("delbtn");
	delbtn.appendChild(document.createTextNode(delbtnText));
		delbtn.addEventListener("click", delItem);
	li.appendChild(delbtn);

//toggle linethrough on compleated items
function crossOfCompletedItems() {
	li.classList.toggle("done");
}

// Delete item from the dom
function delItem() {
	li.remove();
}	
}

// Add list item on click event
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Add list item on enter press
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);