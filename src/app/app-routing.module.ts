import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './outerComponents/page-not-found/page-not-found.component';
import { LoginComponent } from './outerComponents/login/login.component';
import { ShellComponent } from './outerComponents/shell/shell.component';
import { FeedComponent } from './innerComponents/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'messages',
        loadChildren: () => import('./innerComponents/messages/messages.module').then(mod => mod.MessagesModule),
      },
      {
        path: 'notifications',
        loadChildren: () => import('./innerComponents/notifications/notifications.module').then(mod => mod.NotificationsModule),
      },
      {
        path: 'moments',
        loadChildren: () => import('./innerComponents/moments/moments.module').then(mod => mod.MomentsModule),
      },
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
