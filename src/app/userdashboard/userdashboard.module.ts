import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { BloglistComponent } from './bloglist/bloglist.component';


@NgModule({
  declarations: [BloglistComponent],
  imports: [
    CommonModule,
    UserdashboardRoutingModule
  ]
})
export class UserdashboardModule { }
