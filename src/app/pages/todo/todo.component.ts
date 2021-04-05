import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[] = [];
  todoCompleted: Todo;
  completed: boolean;

  constructor(
    public todoService: TodoService,
    private route: ActivatedRoute,
   ) { }

  ngOnInit(): void {

    this.todoService.getAll().subscribe((data: Todo[])=>{
      this.todo = data;
    })


  }


  onChangeAll(){
    this.todoService.getAll().subscribe((data: Todo[])=>{
      this.todo = data;
    })
  }
  onChangeTrue(){
    this.todoService.find(true).subscribe((data: Todo[])=>{
      this.todo = data
    });
  }

  onChangeFalse(){
    this.todoService.find(false).subscribe((data: Todo[])=>{
      this.todo = data
    });
  }

}
