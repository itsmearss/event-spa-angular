import { Component, OnInit, Input } from '@angular/core';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormSelectDirective,
  ButtonDirective,
} from '@coreui/angular';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { CategoryService } from '../../../../services/category.service';
import { NgFor, NgIf } from '@angular/common';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'app-form-event',
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
    FormSelectDirective,
    ButtonDirective,
    NgFor,
    NgIf,
  ],
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.scss',
})
export class FormEventComponent implements OnInit {
  customStylesValidated = false;

  form: FormGroup | any;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  selectedFile2: File | null = null;
  previewUrl2: string | ArrayBuffer | null = null;

  status = [
    { id: 0, name: 'Scheduled' },
    { id: 1, name: 'Ended' },
    { id: 2, name: 'Cancelled' },
  ];

  constructor(
    private _eventService: EventService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private _categoryService: CategoryService
  ) {}

  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      this.selectedFile = file;
      this.form.patchValue({ flyer: file });
      this.form.get('flyer')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected2(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      this.selectedFile2 = file;
      this.form.patchValue({ cover: file });
      this.form.get('cover')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl2 = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  categories: Category[] = [];

  toDateOnlyString(date: string | Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this._categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });

    this.form = this._formBuilder.group({
      title: [''],
      description: [''],
      date: [''],
      time: [''],
      location: [''],
      categoryId: [''],
      maxAttendees: [''],
      status: [''],
      flyer: [null],
      cover: [null],
    });

    if (this.formType === 'Edit') {
      const { id } = this._activatedRouter.snapshot.params;
      this._eventService.getEventById(id).subscribe((event) => {
        console.log(event);
        this.form.patchValue({
          title: event.title,
          description: event.description,
          date: event.date ? this.toDateOnlyString(event.date) : '',
          time: event.time ? event.time : '',
          location: event.location,
          categoryId: event.categoryId,
          maxAttendees: event.maxAttendees,
          status: event.status,
        });
        this.previewUrl = 'http://127.0.0.1:5076/Resources/' + event.flyer;
        this.previewUrl2 = 'http://127.0.0.1:5076/Resources/' + event.cover;
      });
    }
  }

  onSubmit() {
    this.customStylesValidated = true;
    if (this.formType === 'Add') {
      const formData = new FormData();
      formData.append('title', this.form.get('title')?.value);
      formData.append('description', this.form.get('description')?.value);
      formData.append('date', this.form.get('date')?.value);
      formData.append('time', this.form.get('time')?.value);
      formData.append('location', this.form.get('location')?.value);
      formData.append('categoryId', this.form.get('categoryId')?.value);
      formData.append('maxAttendees', this.form.get('maxAttendees')?.value);
      if (this.selectedFile) {
        formData.append('flyer', this.selectedFile, this.selectedFile.name);
      }
      if (this.selectedFile2) {
        formData.append('cover', this.selectedFile2, this.selectedFile2.name);
      }

      this._eventService.createEvent(formData).subscribe((response) => {
        if (response) {
          this._router.navigate(['/events/events']);
        }
      });
    } else {
      const { id } = this._activatedRouter.snapshot.params;
      const formData = new FormData();
      formData.append('title', this.form.get('title')?.value);
      formData.append('description', this.form.get('description')?.value);
      formData.append('date', this.form.get('date')?.value);
      formData.append('time', this.form.get('time')?.value);
      formData.append('location', this.form.get('location')?.value);
      formData.append('categoryId', this.form.get('categoryId')?.value);
      formData.append('maxAttendees', this.form.get('maxAttendees')?.value);
      formData.append('status', this.form.get('status')?.value);
      if (this.selectedFile) {
        formData.append('flyer', this.selectedFile, this.selectedFile.name);
      }

      if (this.selectedFile2) {
        formData.append('cover', this.selectedFile2, this.selectedFile2.name);
      }

      this._eventService.updateEvent(id, formData).subscribe((response) => {
        if (response) {
          this._router.navigate(['/events/events']);
        }
      });
    }
  }

  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  @Input() formType!: string;
}
