import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HistoriqueComponent} from './historique/historique.component';
import {RechercheComponent} from './recherche/recherche.component';
import {HistoriqueService} from './historique/historique.service';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from './router/route.model';
import {ProfileModule} from './profile/profile.module';
import {EventModule} from './event/event.module';
import {CanActivateAuthGuard} from './security/can-activate-auth-guard.service';
import {AuthService} from './security/authservice.service';
import {SharedModule} from './shared/shared.module';
import {
  NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import {NbMenuInternalService} from "@nebular/theme/components/menu/menu.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HistoriqueComponent,
    RechercheComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    NbThemeModule.forRoot({ name: 'default' }),
    ProfileModule,
    EventModule
  ],
  providers: [HistoriqueService, GoogleMapsAPIWrapper, CanActivateAuthGuard,
    AuthService, NbSidebarService, NbMenuService, NbMenuInternalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
