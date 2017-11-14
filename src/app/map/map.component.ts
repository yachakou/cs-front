import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {MapService} from '../map2/map.service';
import {PositionModel} from '../map2/position.model';

interface Maker {
  long: string;
  lat: string;
}

@Component({
  selector: 'app-core-map',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  adresse: string;
  map: any;
  private positions: Array<PositionModel>;
  positionSaved = new PositionModel();
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  ngOnInit() {
    this.loadHistorique();
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode'],
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place);
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.adresse = place.formatted_address;
          this.zoom = 15;
        });
      });
    });
  }


  constructor(public gMaps: GoogleMapsAPIWrapper,
              private mapPos: MapService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  public loadAPIWrapper(map) {
    this.map = map;
  }

  public savePosition() {
    const pos = new PositionModel();
    pos.longitude = this.lng;
    pos.latitude = this.lat;
    pos.adresse = this.adresse;
    this.mapPos.savePosition(pos)
      .subscribe(
        (data) => {
          this.positionSaved = data;
          console.log(data);
        }
      );
    this.loadHistorique();
  }

  public loadHistorique() {
    this.mapPos.loadAll()
      .subscribe(
        (data) => {
          this.positions = data;
          console.log(data);
        },
        (error2) => {
        }
      );
  }

  public showOnMap(id) {
    const find = this.positions.find(myObj => myObj.id === id);
    console.log(find);
    this.lng = find.longitude;
    this.lat = find.latitude;
    const position = new google.maps.LatLng(this.lat, this.lng);
    this.map.panTo(position);
    this.zoom = 15;

  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

}
