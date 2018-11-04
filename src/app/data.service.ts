import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient }    from '@angular/common/http';

@Injectable()

export class DataService {

  private posts = new BehaviorSubject<any>([])
  post = this.posts.asObservable();

  constructor(private http : HttpClient) { }

  changePost(post) {
    this.posts.next(post);
  }

  getHelloWorld() {
    return this.http.get('/helloworld');
  }

}
