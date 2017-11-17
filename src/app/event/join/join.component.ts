import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {VerifyService} from './service/verify.service';
import {MapsAPILoader} from '@agm/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JoinModel} from './model/join.model';


@Component({
  selector: 'app-verify',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinEventComponent implements OnInit {

  distance: number;
  lat: number;
  long: number;

  adresse: string;
  private joinmodel: JoinModel ;
  private isResponse = false;
  private isLoading = false;
  private loadingMessage = 'Un petit instant ...';
  private showMap = true;
  private isError = false;

  rechercherForm: FormGroup;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(private serviceVerify: VerifyService,
              private mapsAPILoader: MapsAPILoader,
              private fb: FormBuilder,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.joinmodel = new JoinModel(0, 0);
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode'],
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.joinmodel.adresse = place.formatted_address;
          this.joinmodel.lat = place.geometry.location.lat();
          this.joinmodel.long = place.geometry.location.lng();
        });
      });
    });
    this.rechercherForm = this.fb.group({
      'adresse': [null, Validators.required],
      'distance': [null, Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(5)])],
    });
  }


  public verifyClient() {
    console.log(this.joinmodel.adresse + '---' + this.rechercherForm.value.distance);
    console.log(this.joinmodel.lat + ' -- ' + this.joinmodel.long);

    this.isResponse = true;

    // this.serviceVerify.verify(this.id)
    //  .subscribe(
    //    (data: JoinModel) => {
    //      this.verifyModel = data;
    //      this.isResponse = true;
    //      this.isError = false;
    //    },
    //    (error) => {
    //      this.isError = true;
    //      this.isResponse = false;
    //    });
  }

  showResult(wanted: any) {
    this.showMap = wanted === 'carte';
  }

}
