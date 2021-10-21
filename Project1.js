//Variable used to count listed items
var toDoTotal = document.getElementById("thingsListed").innerHTML

//Creates a new listed item with the input by clicking the add button
function listAdd() {
    var input = document.getElementById("listInput").value
    var text = document.createTextNode(input)
    var newItem = document.createElement("li")
    var x = document.forms["myList"]["listInput"].value;
    newItem.appendChild(text)
    document.getElementById("listInput").value = ""

    //Check if input meets requirements, alert an error if not, add to the list if does
    if (x == null || x == "") {
        alert ("You cannot leave this empty");
        document.forms.myList.listInput.style.backgroundColor = "indianred";
    } else if (x.length > 20 || x.length < 3) {
        alert ("Inputs must be between 3 and 20 characters long");
        document.forms.myList.listInput.style.backgroundColor = "indianred";
    } else {
        document.getElementById("list").appendChild(newItem)
        document.forms.myList.listInput.style.backgroundColor = "white";
        //Add +1 to the list size counter
        toDoTotal++;
        document.getElementById("thingsListed").innerHTML = toDoTotal;
    }

    //Create a remove button which removes listed item on click
    var remove = document.createElement("input");
    remove.setAttribute("type", "button");
    remove.setAttribute("value", "Delete");
    remove.setAttribute("id", "removeButton");
    remove.addEventListener("click", function(e) {
        newItem.parentNode.removeChild(newItem);
        //Removes 1 from list size counter
        toDoTotal--;
        document.getElementById("thingsListed").innerHTML = toDoTotal;
    }, false);
    newItem.appendChild(remove);
}
//Toggles checked on when clicking a listed item
var y = document.querySelector("ul");
y.addEventListener("click", function(toggle) {
  if (toggle.target.tagName == "LI") {
    toggle.target.classList.toggle("checked");
  }
}, false);
