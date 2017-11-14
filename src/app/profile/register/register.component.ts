import {Component, OnInit} from '@angular/core';
import {ProfileRegisterModel} from './register.model';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerModel: ProfileRegisterModel = new ProfileRegisterModel();
  susbscribe: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.susbscribe = this.fb.group({
        'username': [null, Validators.required],
        'email': ['', Validators.compose([Validators.required, Validators.email])],
        'password': [null, Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(5)])],
        'password2': [null, Validators.required]
      },
      {validator: this.verifyMatchPassword}
    );
  }

  register() {
    // register
    console.log(this.susbscribe.value.username);
    console.log(this.susbscribe.value.email);
    console.log(this.susbscribe.value.password);
    console.log(this.susbscribe.value.password2);
  }

  private verifyMatchPassword(abstractControl: AbstractControl) {

    const pass = abstractControl.value.password;
    const pass2 = abstractControl.value.password2;
    if (pass !== pass2) {
      console.log('false');
      abstractControl.get('password2').setErrors({verifyMatchPassword: true});
      // abstractControl.hasError()
    } else {
      console.log('true');
      return null;
    }
  }
}
