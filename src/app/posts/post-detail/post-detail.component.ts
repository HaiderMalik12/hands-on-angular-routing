import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Post } from '../post';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
  post$: Observable<Post>;
  ngOnInit() {
    // activated route without observable
    // https://angular.io/guide/router#parammap-api
    // console.log(this.route.snapshot.paramMap.get('id'));

    // activated route with observable
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postService.getPost(params.get('id'))
      )
    );
  }
}
