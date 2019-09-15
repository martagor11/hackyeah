import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FirstAidComponent} from './firstAid/firstAid.component';
import {FirstAidQuestionComponent} from './first-aid-question/first-aid-question.component';
import {FirstAidGuideComponent} from "./first-aid-guide/first-aid-guide.component";

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
    path: 'first-aid-questions',
    component: FirstAidQuestionComponent
  },
  {
    path: 'first-aid-guide',
    component: FirstAidGuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
