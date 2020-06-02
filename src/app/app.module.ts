import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeTopComponent } from './components/home-page/home-top/home-top.component';
import { HomeBottomComponent } from './components/home-page/home-bottom/home-bottom.component';
import { HomeAboutComponent } from './components/home-page/home-bottom/home-about/home-about.component';
import { HomeExperienceComponent } from './components/home-page/home-bottom/home-experience/home-experience.component';
import { HomeContactComponent } from './components/home-page/home-bottom/home-contact/home-contact.component';
import { HomeTechnologiesComponent } from './components/home-page/home-bottom/home-technologies/home-technologies.component';
import { HomeTechnologyComponent } from './components/home-page/home-bottom/home-technologies/home-technology/home-technology.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeTopComponent,
    HomeBottomComponent,
    HomeAboutComponent,
    HomeExperienceComponent,
    HomeContactComponent,
    HomeTechnologiesComponent,
    HomeTechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
