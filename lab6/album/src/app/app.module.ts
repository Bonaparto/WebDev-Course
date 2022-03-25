import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }