import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatetimePickerComponent } from './ngx-datetime-picker.component';

describe('NgxDatetimePickerComponent', () => {
  let component: NgxDatetimePickerComponent;
  let fixture: ComponentFixture<NgxDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatetimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
