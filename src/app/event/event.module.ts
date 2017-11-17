import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from './event.component';
import {CreateEventComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';
import {RegisterService} from './create/service/register.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {appRoutes} from '../router/route.model';
import {RouterModule} from '@angular/router';
import {JoinEventComponent} from './join/join.component';
import {VerifyService} from './join/service/verify.service';
import {MapModule} from "../map/map.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MapModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMyDatePickerModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  declarations: [
    EventComponent,
    JoinEventComponent,
    CreateEventComponent,
    DetailComponent
  ],
  providers: [
    RegisterService,
    VerifyService],

})
export class EventModule {
}
