import { App2Module } from './../../projects/blogging2/src/app/app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
