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
  ButtonDirective,
} from '@coreui/angular';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-categories',
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    RouterLink,
    ButtonDirective,
    NgIf,
  ],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
})
export class ListCategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categories = data;
        console.log('Categories retrieved successfully:', data);
      },
      (error) => {
        console.error('Error retrieving categories:', error);
      }
    );
  }

  deleteCategory(id: any): void {
    this.categoryService.delete(id).subscribe(() => {
      console.log('Category deleted successfully');
      this.retrieveCategories(); // Refresh the list after deletion
    });
  }
}
