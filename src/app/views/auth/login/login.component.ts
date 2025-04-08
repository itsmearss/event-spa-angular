import { Component, OnInit } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { RouterLink, Router } from '@angular/router';
import {
  FormsModule,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  SpinnerModule,
  AlertComponent,
} from '@coreui/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage.service';
import { NgIf, NgClass } from '@angular/common';
import Swal from 'sweetalert2';
import { set } from 'lodash-es';

@Component({
  selector: 'app-login',
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
    IconDirective,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    SpinnerModule,
    AlertComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isSignInFailed = false;
  isLoggedIn = false;
  roles: string[] = [];
  isSuccessful = false;
  message = '';
  typeMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Success!',
          text: 'Login successful',
          icon: 'success',
        });
        this.storageService.saveUser(data);

        console.log(data);
        this.message = 'Login successful!';
        this.typeMessage = 'success';
        this.isLoading = false;
        this.isLoggedIn = true;
        this.isSuccessful = true;
        this.roles = this.storageService.getUser().roles;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        Swal.fire({
          title: 'Warning!',
          text: 'User ID or Password is wrong',
          icon: 'warning',
        });
        this.isLoading = false;
        this.isSignInFailed = true;
        this.message = err.error.message;
        this.typeMessage = 'danger';
      },
    });
  }
}
