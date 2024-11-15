async function getTodos() {
    const response = await fetch("http://localhost:3000/api/todos")
    const data = await response.json()
    console.log(data.text)
    //console.log("getData finish")

    const ul = document.querySelector("ul")
    data.forEach(todos => {
        const li= document.createElement("li")
        li.textContent = todo.description
        ul.appendChild(li)
    });
}



getTodos()