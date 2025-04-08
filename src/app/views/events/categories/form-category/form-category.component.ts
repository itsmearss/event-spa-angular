import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GutterDirective,
  RowComponent,
  RowDirective,
  TextColorDirective,
} from '@coreui/angular';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-category',
  imports: [
    RowComponent,
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
    RowDirective,
    GutterDirective,
  ],
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.scss',
})
export class FormCategoryComponent implements OnInit {
  form: FormGroup | any;

  @Input() formType!: string;
  @Input() dataCategory: Category = {
    id: 0,
    name: '',
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: '',
    });

    if (this.formType === 'Edit') {
      const { id } = this._activatedRoute.snapshot.params;
      this._categoryService.getById(id).subscribe((category) => {
        this.form.patchValue({
          name: category.name,
        });
      });
    }
  }

  onSubmit() {
    if (this.formType === 'Add') {
      const data = {
        name: this.form.get('name')?.value,
      };

      this._categoryService.create(data).subscribe((response) => {
        if (response) {
          Swal.fire({
            icon: 'success',
            title: 'Category Created',
          });
          this._router.navigate(['/events/categories']);
        }
      });
    } else {
      const { id } = this._activatedRoute.snapshot.params;
      const data = {
        name: this.form.get('name')?.value,
      };

      this._categoryService.update(id, data).subscribe((response) => {
        if (response) {
          this._router.navigate(['/events/categories']);
        }
      });
    }
  }
}
