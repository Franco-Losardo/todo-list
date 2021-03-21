export default class Alert{
    constructor(alert_id){
        this.alert = document.getElementById(alert_id)
    }
    show(message){
        this.alert.classList.remove("d-none")
        this.alert.innerText = message
    }
    hide(){
        this.alert.classList.add("d-none")
    }
}