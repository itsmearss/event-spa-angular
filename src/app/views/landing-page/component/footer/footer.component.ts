import { Component } from '@angular/core';
import { FooterComponent as footer } from '@coreui/angular';

@Component({
  selector: 'app-footer',
  imports: [footer],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
