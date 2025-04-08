import { Component, OnInit } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
} from '@coreui/angular';
import { EventCardComponent } from '../event-card/event-card.component';
import { Category } from 'src/app/models/category.model';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-upcoming-event',
  imports: [ContainerComponent, RowComponent, ColComponent, EventCardComponent],
  templateUrl: './upcoming-event.component.html',
  styleUrl: './upcoming-event.component.scss',
})
export class UpcomingEventComponent implements OnInit {
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
