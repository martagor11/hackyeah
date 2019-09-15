import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstAidQuestionComponent } from './first-aid-question/first-aid-question.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SecureComponent } from './secure/secure.component';
import { FirstAidComponent } from './first-aid/first-aid.component';
import { HelpComponent } from './help/help.component';

@NgModule({
   declarations: [
      AppComponent,
      FirstAidQuestionComponent,
      FirstAidComponent,
      HomeComponent,
      HeaderComponent,
      SecureComponent,
      HelpComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
