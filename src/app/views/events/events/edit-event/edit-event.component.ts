import { Component } from '@angular/core';
import { FormEventComponent } from '../form-event/form-event.component';

@Component({
  selector: 'app-edit-event',
  imports: [FormEventComponent],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.scss',
})
export class EditEventComponent {}
