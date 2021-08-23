import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newTodo = <Todo>{};
  todos: Todo[] = [];
  errorMessage: string;
  showTodoId: boolean;

  constructor(private todoService: TodoService) {
      this.initialTodo();
  }

  initialTodo(): void {
    Object.assign(this.newTodo, { id: null, title: '', complete: false});
}

ngOnInit() {
    this.loadTodoList();
}

loadTodoList(): void {
    this.todoService.getTodos()
        .subscribe(
            data => this.todos = data,
            error => this.errorMessage = error,
            () => { }
        );
}
}