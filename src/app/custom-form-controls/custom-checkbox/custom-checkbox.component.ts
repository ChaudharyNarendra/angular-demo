import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

let uniqueId = 0;

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit {

  
  @Input() control: any;
  @Input() key: string = '';
  @Input() id = `checkbox-${uniqueId}`;
  @Input() isRequired = false;
  @Input() value: string = '';

  constructor(@Optional() @Self() private ctrlDir: NgControl) {
    if (this.ctrlDir) {
      this.ctrlDir.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.control = this.control || (this.ctrlDir && this.ctrlDir.control);
  }

  onChange() {}
  onTouched() {}
  writeValue(obj: any) {}
  registerOnChange(fn: any) {}
  registerOnTouched(fn: any) {}

}
