import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from './event.component';
import {CreateEventComponent} from './register/register.component';
import {DetailComponent} from './detail/detail.component';
import {RegisterService} from './register/service/register.service';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {appRoutes} from '../router/route.model';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxMyDatePickerModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  declarations: [EventComponent, CreateEventComponent, DetailComponent],
  providers: [RegisterService],

})
export class EventModule {
}
