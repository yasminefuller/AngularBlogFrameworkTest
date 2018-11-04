import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {

  private posts = new BehaviorSubject<any>([])
  post = this.posts.asObservable();

  constructor() { }

  changePost(post) {
    this.posts.next(post);
  }

}
