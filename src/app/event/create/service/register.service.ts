import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {JoinModel} from '../../join/model/join.model';
import {RegisterModel} from '../model/register.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RegisterService {

  URL_REGISTER = 'http://localhost:8085/register/';

  private verifyModel: JoinModel;

  constructor(private http: HttpClient) {
  }

  public register(body: RegisterModel) {
    return this.http.post(this.URL_REGISTER, body);
  }
}
