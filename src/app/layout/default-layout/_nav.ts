import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Data',
  },
  {
    name: 'Events',
    url: '/events',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Events',
        url: '/events/events',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Categories',
        url: '/events/categories',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Users',
    url: '/users',
    iconComponent: { name: 'cil-user' },
  },
];
