import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { MovimentacaoComponent } from './components/movimentacao/movimentacao.component';
import { InvestimentoComponent } from './components/investimento/investimento.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    UsuarioComponent,
    CarteiraComponent,
    MovimentacaoComponent,
    InvestimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
