import {Component, Input, NgZone, OnChanges} from '@angular/core';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {MapService} from './map.service';
import {PositionModel} from './position.model';

interface Maker {
  long: string;
  lat: string;
}

@Component({
  selector: 'app-core-map',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',
})
export class MapComponent implements OnChanges  {
  @Input()
  lat: number;

  @Input()
  lng: number;

  adresse: string;
  map: any;
  private positions: Array<PositionModel>;
  positionSaved = new PositionModel();

  public zoom = 13;

  ngOnChanges(changes) {
    this.showOnMapResult();
  }

  constructor(public gMaps: GoogleMapsAPIWrapper,
              private mapPos: MapService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  public loadAPIWrapper(map) {
    this.map = map;
  }

  // public showOnMap(id) {
  //   const find = this.positions.find(myObj => myObj.id === id);
  //   console.log(find);
  //   this.lng = find.longitude;
  //   this.lat = find.latitude;
  //   const position = new google.maps.LatLng(this.lat, this.lng);
  //   this.map.panTo(position);
  //   this.zoom = 15;
  //
  // }

  public showOnMapResult() {
      const position = new google.maps.LatLng(this.lat, this.lng);
      this.map.panTo(position);
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
