import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  imports: [
    CommonModule,
    StudyRoutingModule
  ],
  declarations: [SubjectsComponent]
})
export class StudyModule { }
