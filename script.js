const form  = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    addtodolist();
});

function addtodolist(){
    const todotext = input.value ; 

    if(todotext){
        const todoEl = document.createElement("li");

        todoEl.innerText = todotext;

        // left click on toggle to complete the task
        todoEl.addEventListener("click" , () =>{
            todoEl.classList.toggle("completed");
        });

        // right click on toggle to delete the task
        todoEl.addEventListener("contextmenu" , (e)=>{
            e.preventDefault();

            todoEl.remove();
        });

        todos.appendChild(todoEl);

        input.value = "";
    }
}
