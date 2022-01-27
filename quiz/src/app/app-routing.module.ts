import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Q1Component } from './q2/q1/q1.component';
import { Q2Component } from './q2/q2/q2.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'quiz', 
    pathMatch: 'full' 
  },
  {
    path: 'quiz',
    component: HomeComponent,
    data: {
      title: 'Welcome to my answer'
    },
  },
  {
    path: 'q2_1',
    component: Q1Component,
    data: {
      title: 'Q2-1'
    },
  },
  {
    path: 'q2_2',
    component: Q2Component,
    data: {
      title: 'Q2-1'
    },
  },
  { path: '*', component: AppComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
