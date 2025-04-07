import { Component } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  AlertComponent,
  SpinnerModule,
  ToasterPlacement,
} from '@coreui/angular';
import { AuthService } from '../../../services/auth/auth.service';
import { NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
    IconDirective,
    FormsModule,
    NgIf,
    AlertComponent,
    ReactiveFormsModule,
    NgClass,
    SpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSignUpFailed = false;
  isSuccessful = false;
  message = '';
  typeMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        fullname: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
      return;
    }

    this.isLoading = true;

    const { username, fullname, password } = this.registerForm.value;

    this.authService.register(fullname, username, password).subscribe({
      next: (data) => {
        console.log(data);
        this.typeMessage = 'success';
        this.message = 'Registration successful!';
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        this.isSuccessful = false;
        this.typeMessage = 'danger';
        this.message = err.error.message;
        this.isSignUpFailed = true;
        this.isLoading = false;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
