import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' My ToDoList';
  todos = [
    {label:'Bring the Milk',done:false,Priority : 1 },
    {label:'Pay the bill',done:true,Priority : 3 },
    {label:'Clean the house',done:false,Priority : 2 },
    {label:'Fix the bulb',done:true,Priority : 4}
  ];

  addTodo(newTodoLabel , newtodoP){
    var newTodo = {
      label: newTodoLabel,
      Priority: newtodoP,
      done:false 
  };
  this.todos.push(newTodo);
}


deleteTodo(todo){
  this.todos = this.todos.filter(t => (t.label !== todo.label));
}

}
