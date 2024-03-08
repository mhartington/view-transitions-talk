import { Component, inject } from '@angular/core';
import { TodoStoreService } from '../../services/todo-service';
import { Todo } from '../../types/todo';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'ng-animations',
  template: `
    <section>
      <h3>Angular Animations</h3>
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
  animations: [
    trigger('listAnimation', [
      transition(':increment', [
        group([
          query('li:enter', [
            style({ transform: 'translate3d(0, calc(-100% + 1px), 0)', 'z-index': -1  }),
            animate( '300ms ease-out', style({ transform: 'translate3d(0, 0, 0)' })),
          ]),
        ]),
      ]),
      transition(':decrement', [
        group([
          query('li:leave', [animate('250ms ease-out', style({ opacity: 0 }))]),
          query('li:leave ~ li:not(:leave)', [
            animate( '300ms ease-out', style({ transform: 'translate3d(0, calc(-100% + 1px), 0)', }),),
          ]),
        ]),
      ]),
    ]),
  ],
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
