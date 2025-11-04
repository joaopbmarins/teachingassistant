import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Cadastro de Alunos');
  aluno: Aluno = { nome: '', cpf: '', email: '', github: ''};
}

export class Aluno {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  github: string= '';
}
