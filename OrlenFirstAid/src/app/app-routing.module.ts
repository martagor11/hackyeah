import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstAidComponent } from './firstAid/firstAid.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'firstAid', component: FirstAidComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
