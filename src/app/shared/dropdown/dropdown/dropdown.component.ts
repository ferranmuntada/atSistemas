import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
})
export class DropdownComponent implements ControlValueAccessor {

  val = '';

  constructor(private translate: TranslateService) { }

  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any): void {
    this.val = value;
    this.onChange(this.val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  select(val: string): void {
    this.val = val;
    this.onChange(this.val);
    this.onTouch();
  }
}
