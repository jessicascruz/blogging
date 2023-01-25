import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import * as data from '../mocks/rawPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any = data.default;

  constructor() { }

  ngOnInit(): void {
  }

}
