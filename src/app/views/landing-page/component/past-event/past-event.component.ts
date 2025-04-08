import { Component, OnInit } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
} from '@coreui/angular';
import { EventCardComponent } from '../event-card/event-card.component';
import { Category } from 'src/app/models/category.model';
import { Event } from 'src/app/models/event.model';
import { CategoryService } from 'src/app/services/category.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-past-event',
  imports: [ContainerComponent, RowComponent, ColComponent, EventCardComponent],
  templateUrl: './past-event.component.html',
  styleUrl: './past-event.component.scss',
})
export class PastEventComponent implements OnInit {
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
}
