import Add_todo from "./components/add-todo.js"
import Modal from "./components/modal.js"
import Filters from "./components/filters.js"

export default class View{
    constructor(){
        this.model = null
        this.table = document.getElementById("table")
        this.add_todo_form = new Add_todo()
        this.modal = new Modal()
        this.filters = new Filters()

        this.add_todo_form.on_click((title, description) => this.add_todo(title, description))
        this.modal.on_click((id, values) => this.edit_todo(id, values))
        this.filters.on_click((filters) => this.filter(filters))    
    }

    set_model(model){
        this.model = model
    }
    render(){
        const todos = this.model.get_todos()
        for (const todo of todos) {
           this.create_row(todo) 
        }
    }
    filter(filters){
        const  {type, words} = filters
        const [, ...rows] = this.table.getElementsByTagName("tr")
        for (const row of rows) {
            const [title, description, completed] = row.children
            let should_hide = false

            if(words){
                should_hide = !title.innerText.includes(words) && !description.innerText.includes(words)
            }
            const should_be_completed = type === "completed"
            const is_completed = completed.children[0].checked

            if(type !=="all" && should_be_completed ==! is_completed){            
                should_hide = true
            }
            if(should_hide){
                row.classList.add("d-none")
            }
            else{
                row.classList.remove("d-none")
            }
        }
    }
    add_todo(title, description){
        const todo = this.model.add_todo(title, description)
        this.create_row(todo)
        
    }
    completed(id){
        this.model.completed(id)
    }
    edit_todo(id, values){
        this.model.edit_todo(id, values)
        const row = document.getElementById(id)
        row.children[0].innerText = values.title;
        row.children[1].innerText = values.description;
        row.children[2].children[0].checked = values.completed;
    }
    remove_todo(id){
        this.model.remove_todo(id)
        document.getElementById(id).remove()
    }

    create_row(todo){
        const row = table.insertRow()
        row.setAttribute("id", todo.id)
        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td class="text-center">
        </td>
        <td class="text-right">

          </td>
        `
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = todo.completed
        checkbox.onclick = () => this.completed(todo.id)
        row.children[2].appendChild(checkbox)

        const edit_btn = document.createElement("button")
        edit_btn.classList.add("btn", "btn-primary", "mb-1")
        edit_btn.innerHTML = "<i class='fa fa-pencil'></i>"
        edit_btn.setAttribute("data-toggle", "modal")
        edit_btn.setAttribute("data-target", "#modal")
        edit_btn.onclick = () => this.modal.set_values({
            id: todo.id,
            title: row.children[0].innerText,
            description: row.children[0].innerText,
            completed: row.children[2].children[0].checked,
        })
        row.children[3].appendChild(edit_btn)

        const remove_btn = document.createElement("button")
        remove_btn.classList.add("btn", "btn-danger", "mb-1", "ml-1")
        remove_btn.innerHTML = "<i class='fa fa-trash'></i>"
        remove_btn.onclick = () => this.remove_todo(todo.id )
        row.children[3].appendChild(remove_btn)
    }
}