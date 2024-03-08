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
          <a routerLink="/ng-animations">Angular Animations</a>
        </li>
        <li>
          <a routerLink="/view-transitions">View Transitions</a>
        </li>
      </ul>
    </aside>
    <main>
    <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'list-animations';
}
