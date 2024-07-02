const item = document.querySelector ("#item")
const ToDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter") {
            addToDo(this.value)
        this.value = ""

        }
        
    }
)
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    
        ${item}
    <i class="fa fa-minus-square-o" style="font-size:24px"></i> 
    
    `;
    listItem.addEventListener(
        "click",
    function(){

        this.classList.toggle("done");
    }
    )
    listItem.querySelector("i").addEventListener(
       "click",
       function() {
        listItem.remove()
       }
    )
    ToDoBox.appendChild(listItem)
        
    
    
}