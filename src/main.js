let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


// creating eventlistener
addToDoButton.addEventListener('click', function(){
    var para = document.createElement('p');
    para.classList.add('para-styling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    
// creating eventlistener
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para); 
        //removeChild to remove a specified child node of the element
    })
})
