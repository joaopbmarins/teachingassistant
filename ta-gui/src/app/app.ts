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
  aluno: Aluno = { nome: '', cpf: '', email: '', github: '' };
  alunoService = new AlunoService();

  gravar(a: Aluno): void {
    this.alunoService.gravar(a);
    this.aluno = { nome: '', cpf: '', email: '' , github: ''};
  }
}
