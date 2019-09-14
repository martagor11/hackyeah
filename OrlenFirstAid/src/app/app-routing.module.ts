<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstAidComponent } from './firstAid/firstAid.component';
=======
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
>>>>>>> master

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'firstAid', component: FirstAidComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
