import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fname: FormControl;
  lname: FormControl;
  phone: FormControl;
  ext: FormControl;
  email: FormControl;
  registerForm: FormGroup;

  showView = false;
  showModal = false;
  showSuccess = false;

  constructor() {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.fname = new FormControl('', Validators.required);
    this.lname = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.ext = new FormControl('');
    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.registerForm = new FormGroup(
      {
        fname: this.fname,
        lname: this.lname,
        phone: this.phone,
        ext: this.ext,
        email: this.email
      },
      {
        updateOn: 'submit'
      }
    );
    this.showView = true;
  }

  submitForm(ev) {
    if (this.registerForm.valid) {
      this.showModal = true;
    } else {
      ev.preventDefault();
      Object.keys(this.registerForm.controls).forEach((controlName) => {
        this.registerForm.controls[controlName].markAsTouched();
        this.registerForm.controls[controlName].updateValueAndValidity();
      });
    }
  }

  closeModal() {
    this.showModal = false;
    this.showView = false;
    this.showSuccess = true;
  }

}
