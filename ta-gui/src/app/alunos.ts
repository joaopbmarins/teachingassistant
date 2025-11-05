import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';

  @Component({
    selector: 'app-root',
    templateUrl: './alunos.html',
    styleUrls: ['./alunos.css'],
    standalone: false,
  })
  export class Alunos implements OnInit {
    aluno: Aluno = new Aluno();
    alunos: Aluno[] = [];
    CpfouGithubDuplicado: boolean = false;

    constructor(private alunoService: AlunoService) {}

    criarAluno(a: Aluno): void {
      this.alunoService.criar(a).subscribe(
        (ar) => {
          if (ar) {
            this.alunos.push(ar);
            this.aluno = new Aluno();
          } else {
            this.CpfouGithubDuplicado = true;
          }
        },
        (msg) => {
          alert(msg.message);
        }
      );
      //alert('Já executei o criar e o subscribe!');
    }

    onMove(): void {
      this.CpfouGithubDuplicado = false;
    }

    ngOnInit(): void {
      this.alunoService.getAlunos().subscribe(
        (as) => {
          this.alunos = as;
        },
        (msg) => {
          alert(msg.message);
        }
      );
    }

    removerAluno(cpf: string): void {
      this.alunoService.remover(cpf).subscribe(
        (res) => {
          if (res.success) {
            this.alunos = this.alunos.filter((a) => a.cpf !== cpf);
          } else {
            alert('Falha ao remover o aluno.');
          }
        },
        (msg) => alert(msg.message)
      );
    }
  }
