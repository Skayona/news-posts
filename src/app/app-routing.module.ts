import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    component: PostsPageComponent
  },
  {
    path: 'posts/:postId',
    component: PostPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
