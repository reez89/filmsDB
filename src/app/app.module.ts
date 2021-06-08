/* COMMON */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* COMPONENTS */
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FlmTableComponent } from './flm-table/flm-table.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { RatingsComponent } from './ratings/ratings.component';
/* MATERIAL MODULES */
import { AppMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
/* PIPES & SERVICES */
import { SearchFilterPipe } from './searchFilter.pipe';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FlmTableComponent,
    FilmCardComponent,
    SearchFilterPipe,
    RatingsComponent,
    SideNavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
