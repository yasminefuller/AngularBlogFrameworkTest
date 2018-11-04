import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeText: string;
  dateText: string;
  postText: string;
  posts =[];

  helloWorld: string = 'No Data';

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.post.subscribe(res => this.posts = res);
    this._data.changePost(this.posts);

  }

  grabHelloWorld() {
    this._data.getHelloWorld().subscribe(res => {
      this.helloWorld = res['data'];
      console.log("Received Response: ", res);
    });
    console.log("calling helloworld")
  }

    addPost() {
      this.posts.push(this.placeText, this.dateText, this.postText);
      this.placeText = '';
      this.dateText = '';
      this.postText = '';
      this._data.changePost(this.posts);
    }

}
