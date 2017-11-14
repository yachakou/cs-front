import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileModel} from './profile.model';

@Injectable()
export class HistoriqueService {

  URL_HISTORIQUE = 'http://localhost:8085/historique/';


  constructor(private http: HttpClient) {
  }

  public findHistorique() {
    return this.http.get<Array<ProfileModel>>(this.URL_HISTORIQUE);
  }

}
