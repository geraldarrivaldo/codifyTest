import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendComponent } from './friend/friend.component';
import{HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostUserComponent } from './post-user/post-user.component';

import { TagListComponent } from './tag-list/tag-list.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    UsersComponent,
    PostUserComponent,
    TagListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
