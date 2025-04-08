import { Component, Input, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonDirective,
  InputGroupComponent,
  InputGroupTextDirective,
} from '@coreui/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-user',
  imports: [
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    ButtonDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    NgFor,
  ],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
})
export class FormUserComponent implements OnInit {
  @Input() formType!: string;

  form: FormGroup | any;

  roles = [
    { id: 1, name: 'User' },
    { id: 2, name: 'Partner' },
    { id: 3, name: 'Admin' },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fullname: '',
      username: '',
      password: '',
      roleId: '',
    });

    if (this.formType === 'Edit') {
      const { id } = this._activatedRoute.snapshot.params;
      this._userService.getById(id).subscribe((data) => {
        this.form.patchValue({
          username: data.username,
          fullname: data.fullname,
          password: data.password,
          roleId: data.roleId,
        });
      });
      console.log(this.roles);
    }
  }

  onSubmit(): void {
    if (this.formType === 'Add') {
      const data = {
        username: this.form.value.username,
        fullname: this.form.value.fullname,
        password: this.form.value.password,
        roleId: this.form.value.roleId,
      };
      this._userService.create(data).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'User Created',
          });
          this._router.navigate(['/users']);
        },
        (error) => {
          console.error('Error creating user:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while creating the user.',
          });
        }
      );
    } else if (this.formType === 'Edit') {
      const { id } = this._activatedRoute.snapshot.params;
      const data = {
        username: this.form.value.username,
        fullname: this.form.value.fullname,
        password: this.form.value.password,
        roleId: this.form.value.roleId,
      };
      this._userService.update(id, data).subscribe(() => {
        console.log('User updated successfully');
        this._router.navigate(['/users']);
      });
    }
  }
}
