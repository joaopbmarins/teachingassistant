import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Metas } from './metas';
import { Alunos } from './alunos';
import { AlunoService } from './aluno.service';


@NgModule({
  declarations: [App, Metas, Alunos],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: App,
      },
      {
        path: 'metas',
        component: Metas,
      },
      {
        path: 'alunos',
        component: Alunos,
      },
    ]),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AlunoService,
    //provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
})
export class AppModule {}
