import {Component, OnInit} from '@angular/core';
import {VerifyService} from './service/verify.service';
import {VerifyModel} from './model/verify.model';
// import {VerifyModel} from './model/VerifyModel';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  id: string;
  private verifyModel: VerifyModel = new VerifyModel();
  private isResponse = false;
  private isError = false;


  constructor(private serviceVerify: VerifyService) {
  }

  ngOnInit() {
  }


  public verifyClient() {
     this.serviceVerify.verify(this.id)
      .subscribe(
        (data: VerifyModel) => {
          this.verifyModel = data;
          this.isResponse = true;
          this.isError = false;
        },
        (error) => {
          this.isError = true;
          this.isResponse = false;
        });
  }

}
