import { Time } from '@angular/common';

export class Event {
  id?: number;
  title?: string;
  description?: string;
  date?: Date;
  time?: Time;
  location?: string;
  categoryId?: number;
  maxAttendees?: number;
  status?: number;
  flyer?: any;
  cover?: any;
  createdAt?: Date;
  updatedAt?: Date;
}
