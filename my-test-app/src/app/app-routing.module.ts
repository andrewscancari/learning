import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasbhoardComponent } from './home/dashboard/dashboard.component';
import { DashboardResolver } from './home/dashboard/dashboard.resolver';


const routes: Routes = [
  { path: '', component: DasbhoardComponent, resolve: { pokemonList: DashboardResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
