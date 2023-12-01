import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadCompletedTodos();
  }

  loadCompletedTodos(): void {
    this.todosService.getCompletedTodos().then(todos => this.completedTodos = todos);
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id).then(() => this.loadCompletedTodos());
  }

  toggleCompletion(id: number): void {
    this.todosService.toggleTodoStatus(id).then(() => this.loadCompletedTodos());
  }
}
