import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [];

  constructor() {}

  getTodos(): Promise<Todo[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.todos.filter(todo => !todo.completed)), 2000);
    });
  }

  getCompletedTodos(): Promise<Todo[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.todos.filter(todo => todo.completed)), 2000);
    });
  }

  addTodo(title: string): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        const newTodo: Todo = { id: Date.now(), title, completed: false };
        this.todos.push(newTodo);
        resolve();
      }, 2000);
    });
  }

  removeTodo(id: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        resolve();
      }, 2000);
    });
  }

  toggleTodoStatus(id: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          this.todos[index].completed = !this.todos[index].completed;
        }
        resolve();
      }, 2000);
    });
  }
}

