import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts: any;
 
  id: number;
  

  constructor(private dataServ: DataService, private router: Router) { }

  ngOnInit() {
    this.dataServ.getPosts()
    .subscribe(data=>this.posts=data);
    
  }

  postPageDetail(id){
    this.router.navigateByUrl('/post/'+id);
  }

  
}