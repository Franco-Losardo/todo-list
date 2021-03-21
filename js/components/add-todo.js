import Alert from "./alert.js"
import Succes_alert from "./succes-alert.js"
export default class Add_todo{
    constructor(){
        this.btn = document.getElementById("add")
        this.title = document.getElementById("title")
        this.description = document.getElementById("description")
        this.alert = new Alert("alert")
        this.succes_message = new Succes_alert()


    }
    on_click(callback){
    this.btn.onclick = () => {
    if (title.value !== "" && description.value !== "") {
        callback(this.title.value, this.description.value)
        this.succes_message.show_message("Todo created successfully")
        this.alert.hide()
    }   
    else{
    this.alert.show("Title and description are required")
    }
}
}

}