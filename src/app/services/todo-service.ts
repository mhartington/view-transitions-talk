import {
  ApplicationRef,
  Injectable,
  effect,
  inject,
  signal,
} from '@angular/core';
import type { Todo } from '../types/todo';

const initialState = [
  {
    id: 1,
    name: 'Learn CSS',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  private ref = inject(ApplicationRef);
  todos = signal<Array<Todo>>([]);

  constructor() {
    const items = JSON.parse(localStorage.getItem('todo-items') ?? '[]');
    if (items.length) {
      this.todos.set(items);
    } else {
      this.todos.set(initialState);
    }
    effect(() => {
      localStorage.setItem('todo-items', JSON.stringify(this.todos()));
      this.ref.tick();
    });
  }

  addTodo() {
    this.todos.update((val) => [
      ...val,
      { name: `new-item-${Date.now()}`, id: crypto.randomUUID() },
    ]);
  }
  remove(todo: Todo) {
    this.todos.update((state) =>
      state.filter((todoToFind: Todo) => todoToFind.id !== todo.id),
    );
  }
}
