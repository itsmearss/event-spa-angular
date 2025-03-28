import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ColDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GutterDirective,
  RowComponent,
  RowDirective,
  TextColorDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-form-category',
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    RowDirective,
    GutterDirective,
    ColDirective,
  ],
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.scss',
})
export class FormCategoryComponent {
  @Input() formType!: string;
}
