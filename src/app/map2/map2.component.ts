import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {MapService} from './map.service';
import {PositionModel} from './position.model';
import LatLng = google.maps.LatLng;

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})
export class Map2Component implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public autoChange = true ;
  positionSaved = new PositionModel();
  private positions: Array<PositionModel>;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private mapPos: MapService,
              private gmapW: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)'],
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
    this.loadHistorique();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  public savePosition() {
    const pos = new PositionModel();
    pos.longitude = this.longitude;
    pos.latitude = this.latitude;
    this.mapPos.savePosition(pos)
      .subscribe(
        (data) => {
          this.positionSaved = data;
          console.log(data);
        },
        (error2) => {
        }
      );
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
    this.longitude = find.longitude;
    this.latitude = find.latitude;
  }
  //
  // public loadAPIWrapper(map) {
  //   this.map = map;
  // }
  //
  // public markerClicked = (markerObj) => {
  //   const position = new google.maps.LatLng(markerObj.latitude, markerObj.longitude);
  //   this.map.panTo(position);
  // }

}
