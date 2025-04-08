import { Component } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
} from '@coreui/angular';
@Component({
  selector: 'app-testimoni',
  imports: [ContainerComponent, RowComponent, ColComponent],
  templateUrl: './testimoni.component.html',
  styleUrl: './testimoni.component.scss',
})
export class TestimoniComponent {}
