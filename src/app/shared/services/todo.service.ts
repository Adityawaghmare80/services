import { Injectable } from '@angular/core';
import { Itodo } from '../modules/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoArray : Array<Itodo> = [
    {
      skill: 'Angular',
      id: 1
    },
    {
      skill: 'Javascript',
      id : 2
    },
    {
      skill: 'TypeScript',
      id: 3
    }
  ]

  fatchAllTodos(){
    return this.todoArray
  }

  createTodo(todo: Itodo){
    this.todoArray.push(todo)
  }

  removeTodo(id:number){
    console.log(id);
    let getIndex = this.todoArray.findIndex(todo => todo.id === id);
    this.todoArray.splice(getIndex, 1)
    
  }
}
