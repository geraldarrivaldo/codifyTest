import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  public users:any;
  tag:string;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(data=>this.users=data);
  }

  

}
