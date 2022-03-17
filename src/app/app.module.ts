import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesCardsComponent } from './movies-cards/movies-cards.component';
import { NavGenresComponent } from './nav-genres/nav-genres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AllMoviesComponent,
    MoviesCardsComponent,
    NavGenresComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
