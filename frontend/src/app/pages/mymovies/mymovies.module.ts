import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymoviesRoutingModule } from './mymovies-routing.module';
import { MymoviesComponent } from './mymovies.component';


@NgModule({
  declarations: [
    MymoviesComponent
  ],
  imports: [
    CommonModule,
    MymoviesRoutingModule
  ]
})
export class MymoviesModule { }
