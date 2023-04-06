import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/universal/nav/nav.component';
import { FooterComponent } from './components/universal/footer/footer.component';
import { LogoComponent } from './components/universal/logo/logo.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, LogoComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
