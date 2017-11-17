import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {JoinModel} from '../model/join.model';

@Injectable()
export class VerifyService {

  URL_VERIFY = 'http://localhost:8085/verify/';

  private verifyModel: JoinModel;

  constructor(private http: Http) {
  }

  public verify(id: string) {
    return this.http.get(this.URL_VERIFY + id).map(response => response.json());
  }
}
