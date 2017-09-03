import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AlunoService } from './aluno.service';


@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AlunoService
    //provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule {}
