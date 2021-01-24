import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  public post: any;
  public comments:any;
  id: number;
  

  constructor(private dataServ:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    
    this.dataServ.getPostDetail(this.id)
    .subscribe(data=>this.post=data);

    this.dataServ.getComment(this.id)
    .subscribe(data=>this.comments=data);
  }
  
  

}
