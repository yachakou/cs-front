import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../security/authservice.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  errorMsg;
  isError = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
  };

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(5)])],
    });
  }

  login() {
    this.loading = true;
    console.log('auth en cours ... ');
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.isError = false;

          this.router.navigate(['home']);
        } else {
          // login failed
          this.errorMsg = 'Username or password is incorrect';
          this.loading = false;
          this.isError = true;
        }
      }, error => {
        this.loading = false;
        this.isError = true;
        this.errorMsg = error;
      });
  }

}
