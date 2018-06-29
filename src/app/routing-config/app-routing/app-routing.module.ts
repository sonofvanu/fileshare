import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeroesComponent } from '../../components/heroes/heroes.component';
import { DahboardComponent } from '../../components/dahboard/dahboard.component';
import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';

const routes:Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard', component:DahboardComponent},
  {path:'hero/:id', component:HeroDetailComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
