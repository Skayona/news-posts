import { Injectable } from '@angular/core';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getList(): Promise<IPost[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json());
  }

  getItem(postId: number): Promise<IPost> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${ postId }`)
      .then((result) => result.json());
  }
}
