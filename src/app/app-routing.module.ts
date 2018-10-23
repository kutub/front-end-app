import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'


const routes: Routes = [

  {
    path: 'study',
    loadChildren: './study/study.module#StudyModule'
  },

  {
     path: '', component: HomeComponent, pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
