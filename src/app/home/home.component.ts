import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeText: string = [];
  dateText: string = [];
  postText: string = [];
  posts =[];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.post.subscribe(res => this.posts = res);
    this._data.changePost(this.posts);

  }

    addPost() {
      this.posts.push(this.placeText, this.dateText, this.postText);
      this.placeText = '';
      this.dateText = '';
      this.postText = '';
      this._data.changePost(this.posts);
    }

}
