import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FirstAidComponent } from './firstAid/firstAid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'firstAid',
    component: FirstAidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
