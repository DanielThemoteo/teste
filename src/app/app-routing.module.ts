import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from './pages/todo/todo.component';
import {FeedComponent} from './pages/feed/feed.component';
import {PostComponent} from './pages/post/post.component';

const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'todo', component: TodoComponent},
  {path: ':postId/post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
