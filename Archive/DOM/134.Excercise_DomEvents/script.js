var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("ul")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Toggles the .done class on any item theat triggers it. 
// function toggleList () {
// 	event.currentTarget.classList.toggle("done");
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//loops through the list, and adds a "click" listener to each item.
// for (var i=0; i < list.length; i++){
// 	list[i].addEventListener("click", toggleList);
// }

function toggleList(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}
ul.addEventListener("click", toggleList);
