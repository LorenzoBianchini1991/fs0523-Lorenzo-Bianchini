import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosService.getTodos().then(todos => this.todos = todos);
  }

  addTodo(title: string): void {
    if (title) {
      this.todosService.addTodo(title).then(() => this.loadTodos());
    }
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id).then(() => this.loadTodos());
  }

  toggleCompletion(id: number): void {
    this.todosService.toggleTodoStatus(id).then(() => this.loadTodos());
  }
}

