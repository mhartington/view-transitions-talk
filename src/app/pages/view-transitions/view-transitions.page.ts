import { Component, inject } from '@angular/core';
import { TodoStoreService } from '../../services/todo-service';
import { Todo } from '../../types/todo';

@Component({
  template: `
    <section>
      <h3>View Transitions</h3>
      <ul>
        @for (todo of store.todos(); track todo.id) {
          <li [style.view-transition-name]="'todo-item-' + todo.id">
            <p>{{ todo.name }}</p>
            <button (click)="removeTodo(todo)">🗑</button>
          </li>
        }
      </ul>
      <button class="fab" (click)="addTodo()">+</button>
    </section>
  `,
  selector: 'view-transtitions',
  standalone: true,
})
export class ViewTransitions {
  store = inject(TodoStoreService);

  addTodo() {
    (document as any).startViewTransition(() => {
      this.store.addTodo();
    });
  }
  removeTodo(todo: Todo) {
    (document as any).startViewTransition(() => {
      this.store.remove(todo);
    });
  }
}
