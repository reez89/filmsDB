import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FlmTableComponent } from './flm-table/flm-table.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent },
  {path : 'cards', component: FilmCardComponent },
  {path : 'table', component: FlmTableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
