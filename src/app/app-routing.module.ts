import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FriendComponent } from './friend/friend.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostUserComponent } from './post-user/post-user.component';
import { TagListComponent } from './tag-list/tag-list.component';





const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'user/:id',component:UsersComponent},
  {path: 'tag', component:TagListComponent},
  {path: 'post/:id', component:PostUserComponent},
  {path: 'friend',component:FriendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
