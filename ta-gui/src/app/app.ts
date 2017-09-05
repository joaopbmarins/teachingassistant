import { Component, signal } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Cadastro de Alunos');

  aluno: Aluno = new Aluno();
  constructor(private alunoService: AlunoService) {}
  alunos: Aluno[] = [];
  cpfduplicado: boolean = false;

  criarAluno(a: Aluno): void {
    if (this.alunoService.criar(a)) {
      this.alunos.push(a);
      this.aluno = new Aluno();
    } else {
      this.cpfduplicado = true;
    }
  }
  onMove(): void {
    this.cpfduplicado = false;
  }

}
