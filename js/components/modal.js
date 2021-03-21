import Alert from "./alert.js"
import Succes_alert from "./succes-alert.js"

export default class Modal{
    constructor(){
        this.title = document.getElementById("modal-title")
        this.description = document.getElementById("modal-description")
        this.btn = document.getElementById("modal-btn")
        this.completed = document.getElementById("modal-completed")
        this.alert = new Alert("modal-alert")
        this.succes_message = new Succes_alert()
        this.todo = null
    }
    set_values(todo){
        this.todo = todo
        this.title.value = todo.title
        this.description.value = todo.description
        this.completed.checked = todo.completed
    }
    on_click(callback){
        this.btn.onclick = () => {
        if (!this.title.value || !this.description.value) {
            this.alert.show("Title and description are required")
            return
        }   
        $("#modal").modal("toggle")
        callback(this.todo.id, {
            title: this.title.value,
            description: this.description.value,
            completed: this.completed.checked,
        })
            this.succes_message.show_message("Todo updated successfully")

    }
    }
}