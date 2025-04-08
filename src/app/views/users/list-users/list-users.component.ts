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
  FormLabelDirective,
  FormControlDirective,
  ButtonDirective,
} from '@coreui/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgIf } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import Swal from 'sweetalert2';

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
    FormLabelDirective,
    FormControlDirective,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];

  selectedFile: File | null = null;

  roles = [
    { id: 1, name: 'User' },
    { id: 2, name: 'Partner' },
    { id: 3, name: 'Admin' },
  ];

  constructor(private userService: UserService) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }

  onSubmit(): void {
    if (this.selectedFile) {
      Swal.showLoading();
      this.userService.uploadExcel(this.selectedFile).subscribe(
        (response) => {
          Swal.hideLoading();
          Swal.fire({
            icon: 'success',
            title: 'File uploaded successfully',
            text: 'Users have been imported successfully.',
          });
          console.log('File uploaded successfully:', response);
          this.retrieveUsers(); // Refresh the list after upload
          this.selectedFile = null;
        },
        (error) => {
          Swal.hideLoading();
          Swal.fire({
            icon: 'error',
            title: 'Error uploading file',
            text: 'An error occurred while uploading the file.',
          });
          console.error('Error uploading file:', error);
          // empty the selected file
          this.selectedFile = null;
        }
      );
    } else {
      console.error('No file selected for upload');
      Swal.fire({
        icon: 'warning',
        title: 'No file selected',
        text: 'Please select a file to upload.',
      });
    }
  }

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
    Swal.fire({
      title: 'Do you want to delete this category?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      icon: 'warning',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService.delete(id).subscribe(() => {
          console.log('User deleted successfully');
          this.retrieveUsers(); // Refresh the list after deletion
        });
        Swal.fire('Deleted!', '', 'success');
      }
    });
  }
}
