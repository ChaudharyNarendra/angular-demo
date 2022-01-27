import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit, ControlValueAccessor {

  @Input() control: AbstractControl | undefined | null;
  @Input() key: string = '';
  constructor(@Optional() @Self() public cntrlDir: NgControl) {
    if (this.cntrlDir) {
      this.cntrlDir.valueAccessor = this;
      console.log("cntrl - ", this.cntrlDir);
    }
  }

  ngOnInit(): void {
    this.control = this.control || (this.cntrlDir && this.cntrlDir.control)
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }

}
