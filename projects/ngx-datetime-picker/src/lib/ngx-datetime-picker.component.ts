import { Component, Input, OnInit, Output, ViewChild, ElementRef, SimpleChanges, HostListener, EventEmitter } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { TimepickerConfig, TimepickerComponent } from 'ngx-bootstrap/timepicker';
import { BsDatepickerConfig, DatepickerConfig, DatePickerComponent } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'lib-ngx-datetime-picker',
  templateUrl: './ngx-datetime-picker.component.html',
  styleUrls: ['./ngx-datetime-picker.component.scss']
})
export class NgxDatetimePickerComponent implements OnInit {

  @ViewChild('dropdown', { static: true }) public dropdown!: BsDropdownDirective;
  
  @Input() public datepickerMode: DatepickerMode = 'day';
  
  @Input() public minDate!: Date;

  @Input() public maxDate!: Date;

  // Default false
  @Input() isHorizantal: boolean = false;
  
  // Default true
  @Input() isVertical: boolean = true;

  // Default true
  @Input() isYearVisible: boolean = true;

  @Input() isDateValid: boolean = true;

  @Input() isTimeValid: boolean = true;

  @Input() daysDisabled: number[] = [];

  @Input() datesDisabled: Date[] = [];

  @Input() datesEnabled: Date[] = [];

  @Input() public applyButtonProperties!: ButtonProperties;

  @Input() public clearButtonProperties!: ButtonProperties;

  // Default 24HR format
  @Input() public showInMeridiem: boolean = true;

  // Default 'MM/DD/YYYY'
  @Input() public dateInputFormat: string = 'MM/DD/YYYY';

  // Default true
  @Input() public isDateVisible: boolean = true;

  // Default true
  @Input() public isTimeVisible: boolean = true;

  // Default bottom
  @Input() placement: Placement = 'bottom';

  @Input() placeholder: string = 'Select date';

  @Input() customClasses: string[] = [];

  @Input() customStyles: string[] = [];

  // Default false
  @Input() showTodayButton: boolean = false;

  // Default false
  @Input() showClearButton: boolean = false;

  // Supporting custom encoder, services. runs apply method on date and time values.
  @Input() public customService: any;

  @Input() public returnDateValueWithServiceApplied: boolean = false;

  @Input() public returnTimeValueWithServiceApplied: boolean = false;

  @Output() public onCloseButtonEvent = new EventEmitter();

  @Output() public onClearButtonEvent = new EventEmitter();

  @Output() public onOpenDropdownEvent = new EventEmitter();

  @Output() public onCloseDropdownEvent = new EventEmitter();
  
  @Output() public onCurrentValueChangeEvent = new EventEmitter();

  public dateValue!: Date;
  public timeValue!: Date;
  public dropdownOpenCloseStatus: boolean = false;

  // public datepickerConfig!: DatepickerConfig;
  public datepickerConfig!: BsDatepickerConfig;
  public timepickerConfig!: TimepickerConfig;

  constructor(private elementRef: ElementRef) { 
    this.datepickerConfig.startView = this.datepickerMode;
    this.datepickerConfig.dateInputFormat = this.dateInputFormat;
  }

  ngOnInit(): void {
  
  }

  public onOpenDropdown(event: any) {
    if (event == true) {
      this.dropdownOpenCloseStatus = true;
      this.dropdown.show();
    } else {
      this.onCloseDropdown();
    }
  }

  public onCloseDropdown(event?: any) {
    this.dropdownOpenCloseStatus = false;

    this.onCloseDropdownEvent.emit(false);
  }

  public onClear() {
    this.onCurrentValueChangeEvent.emit();
  }

  public onClose() {
    this.onCloseDropdownEvent.emit(false);
  }

  public onDatepickerChange() {

    if (this.customService != null && this.returnDateValueWithServiceApplied) {
      this.onCurrentValueChangeEvent.emit(this.customService.apply(this.dateValue));
    } else {
      this.onCurrentValueChangeEvent.emit(this.dateValue);
    }

  }

  public onTimepickerChange() {

    if (this.customService != null && this.returnTimeValueWithServiceApplied) {
      this.onCurrentValueChangeEvent.emit(this.customService.apply(this.timeValue));
    } else {
      this.onCurrentValueChangeEvent.emit(this.timeValue);
    }
  }
}

export interface ButtonProperties {
  name: string;
  cssClass: string;
  isVisible: boolean;
}

type Placement = 'top' | 'bottom' | 'left' | 'right';
type DatepickerMode = 'day' | 'month' | 'year';