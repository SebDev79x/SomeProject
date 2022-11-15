import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './_utils/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { MatButtonModule } from '@angular/material/button';
/* import { TmdbListComponent } from './movies/tmdb-list/tmdb-list.component';
 */@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
/*     TmdbListComponent
 */  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
