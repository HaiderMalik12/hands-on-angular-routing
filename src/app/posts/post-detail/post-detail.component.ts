import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Post } from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  // post$: Observable<Post>;
  post: Post;
  errorMessage: string;
  ngOnInit() {
    this.post = this.route.snapshot.data['resolveData'].post;
    this.errorMessage = this.route.snapshot.data['resolveData'].error;
    if (this.errorMessage) {
      console.error(this.errorMessage);
    }
    console.log(this.post);
  }
  gotoPosts() {
    // this.router.navigateByUrl('/posts');
    this.router.navigate(['/posts']);
  }
}
