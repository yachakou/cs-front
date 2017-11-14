import {Component, OnInit} from '@angular/core';
import {HistoriqueService} from './historique.service';
import {ProfileModel} from './profile.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  private models: Array<ProfileModel>;
  private isResult = false;
  private isError = false;

  constructor(private historiqueService: HistoriqueService) {
  }

  ngOnInit() {
    this.historiqueService.findHistorique()
      .subscribe(
      (data) => {
        this.models = data;
        this.isError = false;
        this.isResult = true;
      },
      (error) => {
        this.isError = true;
        this.isResult = false;
      },
    );
  }

}
