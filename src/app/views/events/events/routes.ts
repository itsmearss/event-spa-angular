import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: `Events`,
    },
    loadComponent: () =>
      import('./list-events/list-events.component').then(
        (m) => m.ListEventsComponent
      ),
  },
  {
    path: 'add',
    data: {
      title: 'Add Event',
    },
    loadComponent: () =>
      import('./add-event/add-event.component').then(
        (m) => m.AddEventComponent
      ),
  },
  {
    path: 'edit/:id',
    data: {
      title: 'Edit Event',
    },
    loadComponent: () =>
      import('./edit-event/edit-event.component').then(
        (m) => m.EditEventComponent
      ),
  },
];
