import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {VerifyComponent} from './verify/verify.component';
import {VerifyService} from './verify/service/verify.service';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HistoriqueComponent} from './historique/historique.component';
import {RechercheComponent} from './recherche/recherche.component';
import {HistoriqueService} from './historique/historique.service';
import {MapComponent} from './map/map.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {CommonModule} from '@angular/common';
import {Map2Component} from './map2/map2.component';
import {MapService} from './map2/map.service';
import {HttpClientModule} from '@angular/common/http';
import {MapContentComponent} from './map/map-content/map-content.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {appRoutes} from './router/route.model';
import {ProfileModule} from './profile/profile.module';
import {EventModule} from './event/event.module';
import {CanActivateAuthGuard} from './security/can-activate-auth-guard.service';
import {AuthService} from './security/authservice.service';


@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HistoriqueComponent,
    RechercheComponent,
    MapComponent,
    Map2Component,
    MapContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXCfYEPllwKIWIR54CO9byXUv3r4afFw8',
      libraries: ['places']
    }),
    ProfileModule,
    EventModule
  ],
  providers: [VerifyService, HistoriqueService, MapService, GoogleMapsAPIWrapper, CanActivateAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
