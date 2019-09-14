import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdultComponent } from './adult/adult.component';
import { FirstAidComponent } from './firstAid/firstAid.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'firstAid', component: FirstAidComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
