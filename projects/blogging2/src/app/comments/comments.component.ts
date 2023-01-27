import { AmigosComum } from './../models/amigosComum';
import { Users } from './../models/users';
import { Comments } from './../../../../../src/app/models/Comments';
import { Component, Input, OnInit } from '@angular/core';
import * as data from './../../../../../src/app/mocks/users';
import { Post } from '../models/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comentarios!: Comments[];
  campoResposta: boolean = false;
  usuarios: Array<Users> = data.default;
  dadosUsuarioModal: Array<Users> = [];
  posts: Array<Post> = [];
  amigos: Array<AmigosComum> = [];

  adicionar: boolean = true;

  constructor() { }

  mudaCampoResposta() {
    this.campoResposta = !this.campoResposta;
  }

  dadosModal(id: number) {
    this.dadosUsuarioModal.pop();
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].id === id) {
        this.dadosUsuarioModal.push(this.usuarios[i]);

        this.posts = this.usuarios[i].posts;
      }
    }

    this.amigosComum(this.dadosUsuarioModal[0].friendIds);
  }

  addUsuario() {
    this.adicionar = !this.adicionar;
  }

  amigosComum(ids: Array<number>) {
    for (let i = 0; i < this.usuarios.length; i++) {

      for (let j = 0; j < ids.length; j++) {

        if(this.usuarios[i].id === ids[j]) {
          this.amigos.push(this.usuarios[i]);
        }

      }

    }
    console.log(this.amigos);
  }

  ngOnInit(): void {
    // console.log(this.usuarios);
    // console.log(this.comentarios);
  }

}
