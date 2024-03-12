import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkWithHref, RouterOutlet],
  template: `
    <aside>
      <h2>Animation Approach</h2>
      <ul>
        <li>
          <a routerLink="/ng-animations">List One</a>
        </li>
        <li>
          <a routerLink="/view-transitions">List Two</a>
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
