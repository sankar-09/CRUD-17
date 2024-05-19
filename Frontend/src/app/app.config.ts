import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), BrowserModule, ApiserviceService, HttpClientModule, AppComponent, NgFor, provideHttpClient()]
};
