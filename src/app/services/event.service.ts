import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:5076/api/event');
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>('http://localhost:5076/api/event/' + id);
  }

  createEvent(event: any): Observable<Event> {
    return this.http.post<Event>('http://localhost:5076/api/event', event);
  }

  updateEvent(id: number, event: any): Observable<Event> {
    return this.http.put<Event>('http://localhost:5076/api/event/' + id, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:5076/api/event/' + id);
  }

  exportEventsToExcel(): Observable<Blob> {
    return this.http.get('http://localhost:5076/api/event/get-export-event', {
      responseType: 'blob',
    });
  }
}
