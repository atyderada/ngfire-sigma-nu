import { AlumniComponent } from './+alumni/alumni.component';
import { BrothersComponent } from './+brothers/brothers.component';
import { HouseComponent } from './+house/house.component';
import { RushComponent } from './+rush/rush.component';
import { HomeComponent } from './+home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'rush', component: RushComponent },
  { path: 'house', component: HouseComponent },
  { path: 'brothers', component: BrothersComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: '**', redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
