import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPost, Post, Tag } from './models/post.model';
import { Comment, DetailUser, User } from './models/user.model';

const APP_ID = '600a7ea7bd860a6bae56cfcd'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private post: string='https://dummyapi.io/data/v1/api/post';
  private user: string='https://dummyapi.io/data/v1/api/user';
  private tag: string="https://dummyapi.io/data/v1/api/tag";
  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get<Post[]>(this.post,{headers:{'app-id': APP_ID}});
  }

  getPostDetail(id){
    return this.http.get<DataPost[]>(this.post+'/'+id,{headers:{'app-id': APP_ID}});
  }

  getUser(){
    return this.http.get<User[]>(this.user,{headers:{'app-id': APP_ID}});
  }

  getUserDetail(id){
    return this.http.get<DetailUser[]>(this.user+'/'+id,{headers:{'app-id': APP_ID}});
  }

  getUserPost(id){
    return this.http.get<Post[]>(this.user+'/'+id+'/post',{headers:{'app-id': APP_ID}});
  }


  getComment(id){
    return this.http.get<Comment[]>(this.post+'/'+id+'/comment',{headers:{'app-id': APP_ID}});
  }

  getTags(){
    return this.http.get<Tag[]>(this.tag,{headers:{'app-id': APP_ID}});
  }

}
