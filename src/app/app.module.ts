

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { Routes, RouterModule, ROUTES } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { NgxLoadingModule } from 'ngx-loading';


import { MainComponent } from './pages/main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { DateTimePipe } from './date.component';

import { RickAndMortyService } from './service/rick-and-morty-service';
import { MetodosGlobais } from './constants';
import { CelularPipe } from './pipe/celular.pipe';
import { CpfOuCnpjPipe } from './pipe/cpfOuCnpj.pipe';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { CharactersComponent } from './pages/characters/characters.component';
import { DetailsComponent } from './pages/details/details.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'details', component: DetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    DateTimePipe,
    CelularPipe,
    CpfOuCnpjPipe,
    CnpjPipe,
    CharactersComponent,
    DetailsComponent,
    LocationsComponent,
    EpisodesComponent,
    PaginacaoComponent,
  ],
  exports:[
    CelularPipe
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // NgxLoadingModule.forRoot({})
  ],

  providers: [ MainComponent, RickAndMortyService, 
    MetodosGlobais,

  { provide: LocationStrategy, useClass: HashLocationStrategy},
  { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
