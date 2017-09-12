export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string;
  metas: Map<string, string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.github = "";
    this.metas = new Map<string, string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.github = from.github;
    this.copyMetasFrom(from.metas);
  }

  copyMetasFrom(from: Map<string, string> | any): void {
    this.metas = new Map<string, string>();
    for (let key in from) {
      this.metas.set(key, from[key]);
    }
  }

  toJSON() {
    const metasObj: Record<string, string> = {};
    this.metas.forEach((valor, chave) => {
      metasObj[chave] = valor;
    });

    return {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      github: this.github,
      metas: metasObj,
    };
  }
}