import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventPageComponent } from './past-event-page.component';

describe('PastEventPageComponent', () => {
  let component: PastEventPageComponent;
  let fixture: ComponentFixture<PastEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastEventPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
