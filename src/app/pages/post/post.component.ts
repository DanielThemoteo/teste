import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed/feed.service';
import { PostService } from './post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './post';
import { Comments } from './comments';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number;
  post: Post;
  comment: Comments;

  constructor(
    public feedService: FeedService,
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.feedService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });

    this.postService.find(this.id).subscribe((data: Comments)=>{
      this.comment = data;
      console.log(this.comment);
    });
  }

}
