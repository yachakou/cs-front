import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {PositionModel} from './position.model';


@Injectable()
export class MapService {

  URL_POSITION = 'http://localhost:8085/position/';
  URL_POSITION_HISTORIQUE = 'http://localhost:8085/positions/';


  constructor(private http: HttpClient) { }

  savePosition(body) {
    return this.http.post<PositionModel>(this.URL_POSITION, body);
  }

  loadAll() {
    return this.http.get<Array<PositionModel>>(this.URL_POSITION_HISTORIQUE);
  }

}
