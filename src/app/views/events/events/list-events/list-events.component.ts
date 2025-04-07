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
import { Event } from '../../../../models/event.model';
import { Category } from '../../../../models/category.model';
import { NgIf } from '@angular/common';
import { EventService } from '../../../../services/event.service';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-list-events',
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
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.scss',
})
export class ListEventsComponent implements OnInit {
  events: Event[] = [];
  categories: Category[] = [];

  constructor(
    private _eventService: EventService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.retrieveEvents();
    this.retrieveCategories();
  }

  retrieveEvents(): void {
    this._eventService.getEvents().subscribe(
      (data) => {
        this.events = data;
        console.log('Events retrieved successfully:', data);
      },
      (error) => {
        console.error('Error retrieving events:', error);
      }
    );
  }

  retrieveCategories(): void {
    this._categoryService.getAll().subscribe(
      (data) => {
        this.categories = data;
        console.log('Categories retrieved successfully:', data);
      },
      (error) => {
        console.error('Error retrieving categories:', error);
      }
    );
  }

  deleteEvent(id: any): void {
    this._eventService.deleteEvent(id).subscribe(() => {
      console.log('Event deleted successfully');
      this.retrieveEvents(); // Refresh the list after deletion
    });
  }
}
