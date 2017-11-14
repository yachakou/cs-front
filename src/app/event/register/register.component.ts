import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {RegisterModel} from './model/register.model';
import {RegisterService} from './service/register.service';
import {VerifyModel} from '../../verify/model/verify.model';
import {MapsAPILoader} from '@agm/core';
import {INgxMyDpOptions} from 'ngx-mydatepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class CreateEventComponent implements OnInit {

  registerModel: RegisterModel = new RegisterModel();
  verifyResponse: VerifyModel = new VerifyModel();
  private isResponse = false;
  private isError = false;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  myOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private registerService: RegisterService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode'],
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.registerModel.adresse = place.formatted_address;
        });
      });
    });
  }


  register() {
    console.log(this.registerModel);
    this.registerService.register(this.registerModel)
      .subscribe(
        (data: VerifyModel) => {
          this.verifyResponse = data;
          this.isResponse = true;
          this.isError = false;

        },
        (error2) => {
          this.isError = true;

        }
      );
  };

}
