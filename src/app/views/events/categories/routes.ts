import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: `Categories`,
    },
    loadComponent: () =>
      import('./list-categories/list-categories.component').then(
        (m) => m.ListCategoriesComponent
      ),
  },
  {
    path: 'add',
    data: {
      title: 'Add Category',
    },
    loadComponent: () =>
      import('./add-category/add-category.component').then(
        (m) => m.AddCategoryComponent
      ),
  },
  {
    path: 'edit/:id',
    data: {
      title: 'Edit Category',
    },
    loadComponent: () =>
      import('./edit-category/edit-category.component').then(
        (m) => m.EditCategoryComponent
      ),
  },
];
