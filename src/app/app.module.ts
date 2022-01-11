import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photo/photos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
