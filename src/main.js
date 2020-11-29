let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function getLocalData(){
    console.log(localStorage.getItem("toDoContainer"))
    document.getElementById('toDoContainer').innerHTML=localStorage.getItem("toDoContainer");

    let children=document.getElementById('toDoContainer').children;
    for (var i=0;i<children.length;i++) {
        // Do stuff
        let item=children[i];
        item.addEventListener('click', function(){
            item.style.textDecoration = "line-through";
            localStorage.setItem("toDoContainer",toDoContainer.innerHTML)
        })
        item.addEventListener('dblclick', function(){
            toDoContainer.removeChild(item); 
            localStorage.setItem("toDoContainer",toDoContainer.innerHTML)
            //removeChild to remove a specified child node of the element
        })
    }
}


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
        localStorage.setItem("toDoContainer",toDoContainer.innerHTML)
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para); 
        localStorage.setItem("toDoContainer",toDoContainer.innerHTML)
        //removeChild to remove a specified child node of the element
    })
})