

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodosGlobais } from '../../constants';
import { RickAndMortyService } from '../../service/rick-and-morty-service';
import { Character } from '../../model/character.model';
import { Data } from '../../model/rick-and-morty.model';
import { Episode } from '../../model/episode.model';
import { Location } from '../../model/location.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public metodos: MetodosGlobais, private router: Router) {
  }
              
  ngOnInit() {
    sessionStorage.clear();
  }

  public navigate(route: string){
    this.router.navigate([route]);
  }


}
