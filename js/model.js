 export default class Model{
    constructor(){
        this.view = null
        this.todos = JSON.parse(localStorage.getItem("todos"))
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
            {
                id:0,
                title: "Made by",
                description: '<a href="https://flosardo.github.io/portafolio/" target="_blank">Franco Losardo</a>',
                completed: false
            }
            ]            
            this.current_id = 1
        }
        else{
            this.current_id = this.todos[this.todos.length -1 ].id + 1
        }
    }
    set_view(view){
        this.view = view
    }
    save(){
        localStorage.setItem("todos", JSON.stringify(this.todos)) 
    }
    get_todos(){
        return this.todos.map((todo) => ({...todo}))
    }
    find_todo(id){
        return this.todos.findIndex((todo) => todo.id === id)
    }
    completed(id){
        const index = this.find_todo(id)
        const todo = this.todos[index]
        todo.completed = !todo.completed
        this.save()
    }
    edit_todo(id, values){
        const index = this.find_todo(id)
        Object.assign(this.todos[index], values)
        this.save()
    }
    add_todo(title, description){
        const todo = {
            id: this.current_id++,
            title,
            description,
            completed: false,
        }
        this.todos.push(todo)
        console.log(this.todos)
        this.save()
        return{...todo}
    }
    remove_todo(id){
        const index = this.find_todo(id)
        this.todos.splice(index, 1)
        this.save()
    }
    
}
