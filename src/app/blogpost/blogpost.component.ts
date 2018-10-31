import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  posts: any;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.post.subscribe(res => this.posts = res);
  }

}
