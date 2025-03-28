import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Events',
    },
    children: [
      {
        path: 'events',
        loadChildren: () => import('./events/routes').then((m) => m.routes),
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/routes').then((m) => m.routes),
      },
    ],
  },
];
