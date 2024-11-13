// var para = document.getElementById('para-2')

// var parentElem = para.parentNode;

// parentElem.removeChild(para)


// var todos = document.querySelector('#todo')

// var paraElem = document.createElement('p');
// paraElem.innerHTML = 'Todo-4';  
// {/* <p>Todo-4</p> */}

// todos.appendChild(paraElem)


var btn = document.getElementById('btn')
btn.style.cssText = "background-color: blue; color: white; padding: 15px; border-radius: 5px; font-size: 20px; border: none; cursor: pointer; margin: 10px; font-weight: bold;"

var inp = document.getElementById('inp')
inp.style.cssText = "padding: 10px; border-radius: 5px; font-size: 20px; border: ; margin: 10px;"



var idCount = 1;

function addTodo() {
    var todos = document.getElementById('todos')
    var inpVal = document.getElementById('inp')

    if (inpVal.value.trim() === "") {
        alert("Please enter a todo")
        return;
    }

    // console.log(inpVal.value);

    var element = document.createElement('div')
    element.setAttribute('id', idCount)
    element.setAttribute('class', "todo")

    element.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${idCount})">Delete</button> <button onclick="updateTodo(${idCount})">Update</button>
   `

    todos.appendChild(element)

    idCount = idCount + 1;

    inpVal.value = '';
}

function deleteTodo(id){
    // console.log("DELETED", id);
    var deletedItem = document.getElementById(id);
    var parentElem = deletedItem.parentNode;
    parentElem.removeChild(deletedItem)
}

function updateTodo(id){
    var inpVal = document.getElementById('inp')
    var todoItem = document.getElementById(id)

    todoItem.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${id})">Delete</button> <button onclick="updateTodo(${id})">Update</button>
   `
}







