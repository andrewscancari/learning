import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasbhoardComponent } from './home/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DasbhoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
