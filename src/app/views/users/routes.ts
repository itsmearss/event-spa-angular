import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users',
    },
    children: [
      {
        path: '',
        data: {
          title: 'Users List',
        },
        loadComponent: () =>
          import('./list-users/list-users.component').then(
            (m) => m.ListUsersComponent
          ),
      },
      {
        path: 'add',
        data: {
          title: 'Add Users',
        },
        loadComponent: () =>
          import('./add-user/add-user.component').then(
            (m) => m.AddUserComponent
          ),
      },
      {
        path: 'edit/:id',
        data: {
          title: 'Edit Users',
        },
        loadComponent: () =>
          import('./edit-user/edit-user.component').then(
            (m) => m.EditUserComponent
          ),
      },
    ],
  },
];
