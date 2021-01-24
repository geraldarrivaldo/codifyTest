import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  
  public tags:any;
  
  constructor( private dataServ: DataService) { }

  ngOnInit() {
      this.dataServ.getTags()
      .subscribe(data=>this.tags=data);
    
  }

  

}
