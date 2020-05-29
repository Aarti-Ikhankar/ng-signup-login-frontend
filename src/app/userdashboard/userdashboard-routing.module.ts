import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { AuthGuardService as AuthGuard } from '../services/auth.service';


const routes: Routes = [
  {
    path: 'bloglist',
    component: BloglistComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashboardRoutingModule { }
