import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(todoForm: NgForm){
    if(todoForm.valid){
      let obj = {...todoForm.value, id: Math.floor(Math.random() * 10)};
      console.log(obj);
      this._todoService.createTodo(obj)
      todoForm.resetForm()
    }
  }

}
