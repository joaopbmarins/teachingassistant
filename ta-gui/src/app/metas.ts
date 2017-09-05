import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

  @Component({
    selector: 'metas',
    templateUrl: './metas.html',
    styleUrls: ['./metas.css'],
    standalone: false
  })
  export class Metas implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[];

    atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno);
    }

    ngOnInit(): void {
      this.alunos = this.alunoService.getAlunos();
    }
  }
