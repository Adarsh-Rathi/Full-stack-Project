// Select the input box and list container elements from the HTML document
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask(){
    // Check if the input box is empty
    if(inputbox.value === ""){
        // If empty, show an alert message
        alert("You must write something!");
    }
    else{
        // Create a new list item element
        let li = document.createElement("li");
        // Set the inner HTML of the list item to the input value
        li.innerHTML = inputbox.value;
        // Append the list item to the list container
        listcontainer.appendChild(li);   
        // Create a new span element for the delete button
        let span = document.createElement("span");
        // Set the inner HTML of the span to the delete character (×)
        span.innerHTML = "\u00d7";
        // Append the span to the list item
        li.appendChild(span);
    }    
    // Clear the input box
    inputbox.value = "";
    // Save the updated list to local storage
    saveData();
}

// Add an event listener to the list container to listen for clicks
listcontainer.addEventListener("click", function(e){
    // Check if the click target is a list item
    if(e.target.tagName === "LI"){
        // Toggle the "checked" class to mark the task as completed
        e.target.classList.toggle("checked");
        // Save the updated list to local storage
        saveData();
    }
    // Check if the click target is a delete button (span)
    else if(e.target.tagName === "SPAN"){
        // Remove the parent list item (the task)
        e.target.parentElement.remove();
        // Save the updated list to local storage
        saveData();
    }
}, false);

// Function to save the list to local storage
function saveData(){
    // Set the local storage item "data" to the current inner HTML of the list container
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Function to show the saved tasks
function showTask(){
    // Set the inner HTML of the list container to the saved data from local storage
    listcontainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display the saved tasks on page load
showTask();