import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form!: FormGroup;
  formArray!: FormArray;
  defaultValue: any = {
    name: '',
    email: '',
    phone: '',
    message: [''],
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formArray = this.fb.array([
      this.fb.control(''),
      this.fb.control(''),
    ]);
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      message: this.formArray
    });
  }

  reset() {
    console.log(this.form.value);
    this.form.reset(this.defaultValue);
    console.log(this.form.value);
  }

}
