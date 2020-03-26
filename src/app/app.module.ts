import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModules } from './header/header.modules';
import { PersonagensModules } from './personagens/personagens.modules';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { ComicsModule } from './comics/comics.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HeaderModules,
    PersonagensModules,
    ComicsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
