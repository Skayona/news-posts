import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post: IPost;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    const { postId } = this.route.snapshot.params;
    this.getItem(postId);
  }

  ngOnInit() {
  }

  getItem(postId: number) {
    this.postsService.getItem(postId)
      .then((item) => {
        this.post = item;
      });
  }

}
