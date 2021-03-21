import Model from "./model.js"
import View from "./view.js"


document.addEventListener('DOMContentLoaded',  () => {
    const model = new Model()
    const view = new View()
    model.set_view(view)
    view.set_model(model)
    view.render()
})