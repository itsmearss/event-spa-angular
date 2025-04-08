import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AuthGuard } from './auth.guard';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { NavbarComponent } from './views/landing-page/component/navbar/navbar.component';
import { PastEventPageComponent } from './views/past-event-page/past-event-page.component';
import { UpcomingEventPageComponent } from './views/upcoming-event-page/upcoming-event-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },

    children: [
      {
        path: 'dashboard',
        data: {
          roles: ['Admin', 'User'],
        },
        loadChildren: () =>
          import('./views/dashboard/routes').then((m) => m.routes),
        canActivate: [AuthGuard],
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/routes').then((m) => m.routes),
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/routes').then((m) => m.routes),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/routes').then((m) => m.routes),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/routes').then((m) => m.routes),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/routes').then((m) => m.routes),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/routes').then((m) => m.routes),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/routes').then((m) => m.routes),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/routes').then((m) => m.routes),
      },
      {
        path: 'events',
        data: {
          roles: ['Admin'],
        },
        loadChildren: () =>
          import('./views/events/routes').then((m) => m.routes),
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        data: {
          roles: ['Admin'],
        },
        loadChildren: () =>
          import('./views/users/routes').then((m) => m.routes),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'landing-page',
    loadComponent: () => LandingPageComponent,
  },
  {
    path: 'past-event',
    loadComponent: () => PastEventPageComponent,
  },
  {
    path: 'upcoming-event',
    loadComponent: () => UpcomingEventPageComponent,
  },
  {
    path: '404',
    loadComponent: () =>
      import('./views/pages/page404/page404.component').then(
        (m) => m.Page404Component
      ),
    data: {
      title: 'Page 404',
    },
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./views/pages/page500/page500.component').then(
        (m) => m.Page500Component
      ),
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./views/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./views/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    data: {
      title: 'Register Page',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];
