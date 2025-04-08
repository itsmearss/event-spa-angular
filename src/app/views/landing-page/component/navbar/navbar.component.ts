import { Component } from '@angular/core';
import {
  NavbarModule,
  NavbarComponent as navbar,
  ContainerComponent,
  NavItemComponent,
  NavModule,
  DropdownComponent,
  NavLinkDirective,
  ThemeDirective,
  DropdownToggleDirective,
  DropdownMenuDirective,
  DropdownItemDirective,
  CollapseModule,
  ButtonModule,
  NavComponent,
} from '@coreui/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarModule,
    navbar,
    ContainerComponent,
    NavItemComponent,
    NavModule,
    DropdownComponent,
    NavLinkDirective,
    ThemeDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    CollapseModule,
    ButtonModule,
    RouterLink,
    NavComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
