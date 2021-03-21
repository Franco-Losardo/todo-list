export default class Succes_alert{
    constructor(){
        this.succes_message = document.getElementById("succes_message")
    }
    show_message(succes_text){
        let succes = document.createElement('p')
        succes_text = document.createTextNode(succes_text)
        succes.classList.add("btn", "btn-success")
        succes.appendChild(succes_text)
        succes_message.appendChild(succes)
        setTimeout( function () {
          succes.style.display = 'none'
        },2000)
    }
}