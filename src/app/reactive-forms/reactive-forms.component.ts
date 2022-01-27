import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { maxRequiredAge } from './validators/maxRequiredAge';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  myForm = this.fb.group({
    firstName: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
        
    }],
    lastName: ['', {
      validators: [
        Validators.required,
        Validators.minLength(60)
      ]
    }],
    dob: ['', {
      validators: [Validators.required, maxRequiredAge]
    }],
    gender: ['', Validators.required]

  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(value => console.log(value));
  }




}
