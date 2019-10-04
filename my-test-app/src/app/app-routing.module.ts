import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasbhoardComponent } from './dashboard/dashboard.component';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { TableViewComponent } from './table-view/table-view.component';


const routes: Routes = [{
    path: 'dashboard',
    component: DasbhoardComponent,
    resolve: { pokemonList: DashboardResolver }
  }, {
    path: 'table',
    component: TableViewComponent
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
