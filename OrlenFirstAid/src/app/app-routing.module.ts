import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdultComponent } from './adult/adult.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'adult', component: AdultComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
