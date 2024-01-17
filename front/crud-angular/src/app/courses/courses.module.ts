import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
  CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatIconModule
  ]
})
export class CoursesModule { }
