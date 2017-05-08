import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RushComponent } from './+rush/rush.component';
import { HouseComponent } from './+house/house.component';
import { BrothersComponent } from './+brothers/brothers.component';
import { AlumniComponent } from './+alumni/alumni.component';
import { HomeComponent } from './+home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';


import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlideShowControlComponent } from './slide-show/slide-show-control/slide-show-control.component';
import { SlideShowImagesComponent } from './slide-show/slide-show-images/slide-show-images.component';
import { SlideShowPreviewsComponent } from './slide-show/slide-show-previews/slide-show-previews.component';
import { SlideShowPreviewComponent } from './slide-show/slide-show-preview/slide-show-preview.component';
import { SlideShowImageComponent } from './slide-show/slide-show-image/slide-show-image.component'

@NgModule({
  declarations: [
    AppComponent,
    RushComponent,
    HouseComponent,
    BrothersComponent,
    AlumniComponent,
    HomeComponent,
    TopBarComponent,
    BottomBarComponent,
    SlideShowComponent,
    SlideShowControlComponent,
    SlideShowImagesComponent,
    SlideShowPreviewsComponent,
    SlideShowPreviewComponent,
    SlideShowImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
