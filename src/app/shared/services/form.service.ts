import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  accountForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  addressForm = new FormGroup({
    street: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    city: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    state: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    zip: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  userForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  vehicleForm = new FormGroup({
    fName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  vehicle_price = new FormGroup({
    ema: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    pass: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
}
