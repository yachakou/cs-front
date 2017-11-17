import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {MapContentComponent} from './map-content/map-content.component';
import {AgmCoreModule} from '@agm/core';
import {MapService} from './map.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXCfYEPllwKIWIR54CO9byXUv3r4afFw8',
      libraries: ['places']
    })
  ],
  declarations: [MapComponent, MapContentComponent],
  providers: [MapService],
  exports: [MapComponent]
})
export class MapModule {
}
