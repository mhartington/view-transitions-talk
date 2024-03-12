import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition(':increment', [
    group([
      query('li:enter', [
        style({
          transform: 'translate3d(0, calc(-100% + 1px), 0)',
          'z-index': -1,
        }),
        animate('300ms ease-out', style({ transform: 'translate3d(0, 0, 0)' })),
      ]),
    ]),
  ]),
  transition(':decrement', [
    group([
      query('li:leave', [animate('250ms ease-out', style({ opacity: 0 }))]),
      query('li:leave ~ li:not(:leave)', [
        animate(
          '300ms ease-out',
          style({ transform: 'translate3d(0, calc(-100% + 1px), 0)' }),
        ),
      ]),
    ]),
  ]),
]);
