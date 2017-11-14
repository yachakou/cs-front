import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {VerifyModel} from '../../../verify/model/verify.model';
import {RegisterModel} from '../model/register.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RegisterService {

  URL_REGISTER = 'http://localhost:8085/register/';

  private verifyModel: VerifyModel;

  constructor(private http: HttpClient) {
  }

  public register(body: RegisterModel) {
    return this.http.post(this.URL_REGISTER, body);
  }
}
