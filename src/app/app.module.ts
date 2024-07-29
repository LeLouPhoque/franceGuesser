import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { QuestionComponent } from './question/question.component';
import { NavbarLeftComponent } from './navbar/navbar-left/navbar-left.component';
import { NavbarCenterComponent } from './navbar/navbar-center/navbar-center.component';
import { NavbarRightComponent } from './navbar/navbar-right/navbar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    QuestionComponent,
    NavbarLeftComponent,
    NavbarCenterComponent,
    NavbarRightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
