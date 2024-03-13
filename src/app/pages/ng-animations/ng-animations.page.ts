import { Component, inject } from '@angular/core';
import { TodoStoreService } from '../../services/todo-service';
import { Todo } from '../../types/todo';
import { listAnimation } from '../../animations/list-animation';
@Component({
  selector: 'ng-animations',
  template: `
    <section>
      <h3 class="page-title">Angular Animations</h3>
      <ul [@listAnimation]="store.todos().length">
        @for (todo of store.todos(); track todo.id) {
          <li>
            <p>{{ todo.name }}</p>
            <button (click)="removeTodo(todo)">🗑</button>
          </li>
        }
      </ul>
      <button class="fab" (click)="addTodo()">+</button>
    </section>
  `,
  standalone: true,
  animations: [listAnimation],
})
export class NgAnimations {
  store = inject(TodoStoreService);

  addTodo() {
    this.store.addTodo();
  }
  removeTodo(todo: Todo) {
    this.store.remove(todo);
  }
}
