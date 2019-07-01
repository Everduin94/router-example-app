import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { Routes, RouterModule } from '@angular/router';
import { MessageDetailComponent } from '../message-detail/message-detail.component';

const MESSAGE_ROUTES: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: ':id',
        component: MessageDetailComponent
      }
    ]
    
  },
];

@NgModule({
  declarations: [MessagesComponent, MessageDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MESSAGE_ROUTES)
  ]
})
export class MessagesModule { }
