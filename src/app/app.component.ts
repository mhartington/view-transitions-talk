import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkWithHref, RouterOutlet, RouterLinkActive],
  template: `
    <aside>
      <h2>Animation Approach</h2>
      <ul>
        <li>
          <a routerLinkActive="selected" routerLink="/ng-animations"
            >List One</a
          >
        </li>
        <li>
          <a routerLinkActive="selected" routerLink="/view-transitions">List Two</a>
        </li>
      </ul>
    </aside>
    <main class="router-wrapper">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'list-animations';
}
