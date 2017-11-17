import {Routes} from '@angular/router';
import {CreateEventComponent} from '../event/create/create.component';
import {JoinEventComponent} from '../event/join/join.component';
import {RechercheComponent} from '../recherche/recherche.component';
import {HistoriqueComponent} from '../historique/historique.component';
import {MapComponent} from '../map/map.component';
import {EventComponent} from '../event/event.component';
import {ProfilComponent} from '../profile/profil.component';
import {RegisterComponent} from '../profile/register/register.component';
import {LoginComponent} from '../profile/login/login.component';
import {CanActivateAuthGuard} from '../security/can-activate-auth-guard.service';
import {DetailComponent} from "../event/detail/detail.component";

export const appRoutes: Routes = [

  /* Event */
  {path: 'event', redirectTo: 'home'},
  {path: 'event/create', component: CreateEventComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'join', component: JoinEventComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'myevent', component: DetailComponent, canActivate: [CanActivateAuthGuard]},

  /** User **/
  {path: 'profil', component: ProfilComponent},
  {path: 'profil/register', component: RegisterComponent},
  {path: 'profil/login', component: LoginComponent},

  {path: 'recherche', component: RechercheComponent},
  {path: 'historique', component: HistoriqueComponent},
  {path: 'map', component: MapComponent},

  /* Home */
  {path: 'home', component: EventComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
