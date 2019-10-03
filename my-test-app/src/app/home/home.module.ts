import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DasbhoardComponent } from './dashboard/dashboard.component';
import { LoadPokemonDataDirective } from './dashboard/load-pokemon-data.directive';



@NgModule({
  declarations: [DasbhoardComponent, LoadPokemonDataDirective],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    HttpClientModule
  ],
  exports: [
    DasbhoardComponent
  ]
})
export class HomeModule { }
