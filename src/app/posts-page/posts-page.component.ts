import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts: IPost[];

  constructor(
    private postsService: PostsService
  ) {
    this.posts = [];
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.postsService.getList()
      .then((list) => {
        this.posts = list;
      });
  }

}
