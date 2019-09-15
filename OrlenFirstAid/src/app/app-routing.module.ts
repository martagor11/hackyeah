import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { FirstAidComponent } from './first-aid/first-aid.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'first-aid',
    component: FirstAidComponent
  },
  {
    path: 'secure',
    component: SecureComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
