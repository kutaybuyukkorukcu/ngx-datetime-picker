import { TestBed } from '@angular/core/testing';

import { NgxDatetimePickerService } from './ngx-datetime-picker.service';

describe('NgxDatetimePickerService', () => {
  let service: NgxDatetimePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDatetimePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
