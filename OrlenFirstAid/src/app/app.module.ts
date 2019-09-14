import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdultComponent } from './adult/adult.component';
import { FirstAidComponent } from './firstAid/firstAid.component';

@NgModule({
   declarations: [
      AppComponent,
      AdultComponent,
      FirstAidComponent
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
