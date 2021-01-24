import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:User[];
  public detailUser:any;
  public posts:any;
  id: number;
 

  constructor(private dataServ: DataService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.dataServ.getUserDetail(this.id)
    .subscribe(data=>this.detailUser=data);

    this.dataServ.getUserPost(this.id)
    .subscribe(data=>this.posts=data);
  }

  postPageDetail(id){
    this.router.navigateByUrl('/post/'+id);
  }

  

}
