import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { Post } from './post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];

  constructor(public postService: FeedService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
  }

}
