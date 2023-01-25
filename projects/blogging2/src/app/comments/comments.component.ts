import { Comments } from './../../../../../src/app/models/Comments';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comentarios!: Comments[];
  campoResposta: boolean = false;

  constructor() { }

  mudaCampoResposta() {
    this.campoResposta = !this.campoResposta;
  }

  ngOnInit(): void {
    console.log(this.comentarios);
  }

}
