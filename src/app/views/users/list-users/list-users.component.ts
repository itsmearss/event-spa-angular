import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  TableDirective,
  TableColorDirective,
  TableActiveDirective,
  BorderDirective,
  AlignDirective,
  ButtonDirective,
} from '@coreui/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-users',
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    ButtonDirective,
    RouterLink,
    NgIf,
  ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];

  roles = [
    { id: 1, name: 'User' },
    { id: 2, name: 'Partner' },
    { id: 3, name: 'Admin' },
  ];

  constructor(private userService: UserService) {}

  retrieveUsers(): void {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log('Users retrieved successfully:', data);
      },
      (error) => {
        console.error('Error retrieving users:', error);
      }
    );
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  deleteUser(id: any): void {
    this.userService.delete(id).subscribe(() => {
      console.log('User deleted successfully');
      this.retrieveUsers(); // Refresh the list after deletion
    });
  }
}
