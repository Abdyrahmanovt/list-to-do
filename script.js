const textInput = document.querySelector('.text-input')
const addBtn = document.querySelector('.add-btn')
const list = document.querySelector('.list')
const clearBtn = document.querySelector(".clear-all")

addBtn.addEventListener("click", () => {
    if (textInput.value.trim()) {
        const template = `<li>
                            <input type="checkbox" class="done">
                            ${textInput.value} 
                            <button class="del-btn">Удалить</button>
                           </li>`
        list.innerHTML += template
        textInput.value = ""
    }
})

list.addEventListener("click", (event) => {
    if (event.target.classList[0] === "del-btn") {
        event.target.parentNode.remove()
    }
})


list.addEventListener("click", (event) => {
    if (event.target.classList[0] === "done") {
        event.target.parentNode.classList.toggle("line-through")
    }
})
//======= КНОПКА ENTER
textInput.addEventListener("keyup", (e) => {
    let key = e.keyCode
    if (textInput.value.trim() && key === 13) {
        const template = `<li class="list-item">  
                            <input type="checkbox" class="done" >
                            ${textInput.value}
                            <button class="del-btn">Удалить</button>
                           </li>`
        list.innerHTML += template
        textInput.value = ""
    }
})

//===========КНОПКА ОЧИСТИТЬ ВСЁ
clearBtn.addEventListener("click", () => {
    list.innerHTML = ""
})










