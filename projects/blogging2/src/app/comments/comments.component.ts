import { AmigosComum } from './../models/amigosComum';
import { Users } from './../models/users';
import { Comments } from './../../../../../src/app/models/Comments';
import { Component, Input, OnInit } from '@angular/core';
import * as data from './../../../../../src/app/mocks/users';
import { Post } from '../models/post';
import { arrayToTree } from 'performant-array-to-tree';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comentarios!: Comments[];
  campoResposta: boolean = false;
  usuarios: Array<Users> = data.default;
  dadosUsuarioModal: Array<Users> = [];
  posts: Array<Post> = [];
  amigos: Array<AmigosComum> = [];
  adicionar: boolean = true;
  index!: number;
  textareaValor: string = '';
  arvore: Array<any> = [];
  arvoreNull: Array<any> = [];
  arvoreNode1: Array<any> = [];
  arvoreNode2: Array<any> = [];

  constructor() {}

  mudaCampoResposta(index: number) {
    this.index = index;
    this.campoResposta = !this.campoResposta;
  }

  dadosModal(id: number) {
    this.dadosUsuarioModal.pop();
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
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
    this.amigos.pop();
    for (let i = 0; i < this.usuarios.length; i++) {
      for (let j = 0; j < ids.length; j++) {
        if (this.usuarios[i].id === ids[j]) {
          this.amigos.push(this.usuarios[i]);
        }
      }
    }
  }

  addComentario(value: string, index: number) {

    var ultimoComentario = this.comentarios.slice(-1);
    const id = ultimoComentario[0].id + 1;
    const responds = index + 1;
    var timestamp = new Date().toISOString();

    const novoComentario: Comments = {
      id: id,
      respondsTo: {id: responds},
      author: {id: 1, username: 'João Figueiredo'},
      timestamp: timestamp.toString(),
      content: value
    }

    this.comentarios.push(novoComentario);
    this.campoResposta = false;
  }


  arrayParaArvore(){
    this.arvore = arrayToTree(this.comentarios,  { id: "id", parentId: "respondsTo.id", childrenField: "nodes" });
    this.arvoreNull = this.arvore;

    if(this.arvoreNull.length > 0) {
      this.arvoreNode1 = this.arvore[1].nodes;
      this.arvoreNode2 = this.arvore[1].nodes[0].nodes;
    }
  }

  ngOnInit(): void {
    this.arrayParaArvore();
  }
}
