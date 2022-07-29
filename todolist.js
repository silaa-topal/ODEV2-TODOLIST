let btn = document.querySelector("#liveToastBtn")
let task = document.querySelector("#task")
let list = document.querySelector("#list")

btn.addEventListener('click', newElement)


function newElement(){
    var span = document.createElement('span')
    span.innerHTML = "x"
    span.classList.add("close", "close-hover")
    let li = document.createElement("li")
    li.textContent = task.value
    list.appendChild(li)
    li.appendChild(span)
    task.value =""
    span.addEventListener('click', function(li){
        this.parentElement.style.display = 'none';
    })
    localStorage.setItem('items',list)
}


list.addEventListener('click', function(task){
    task.target.classList.toggle("checked")
    
})

