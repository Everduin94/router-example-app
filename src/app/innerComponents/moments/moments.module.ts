import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent } from './moments.component';
import { RouterModule, Routes } from '@angular/router';

const MOMENTS_ROUTES: Routes = [
  {
    path: '',
    component: MomentsComponent,
  },
];

@NgModule({
  declarations: [MomentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MOMENTS_ROUTES)
  ]
})
export class MomentsModule { }
