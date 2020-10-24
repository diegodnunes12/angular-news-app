import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':source', component: NewsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
