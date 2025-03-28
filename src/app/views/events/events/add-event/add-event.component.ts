import { Component } from '@angular/core';
import { FormEventComponent } from '../form-event/form-event.component';

@Component({
  selector: 'app-add-event',
  imports: [FormEventComponent],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss',
})
export class AddEventComponent {}
