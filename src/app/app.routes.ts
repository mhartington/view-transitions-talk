import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'ng-animations', pathMatch: 'full' },
  {
    path: 'ng-animations',
    loadComponent: () =>
      import('./pages/ng-animations/ng-animations.page').then(
        (m) => m.NgAnimations,
      ),
  },
  {
    path: 'view-transitions',
    loadComponent: () =>
      import('./pages/view-transitions/view-transitions.page').then(
        (m) => m.ViewTransitions,
      ),
  },
];
