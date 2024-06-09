import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty-service';
import { Character } from '../../model/character.model';
import { Router } from '@angular/router';
import { Info } from 'src/app/model/rick-and-morty.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters?: Character[] = [];
  public info?: Info;

  constructor(private service: RickAndMortyService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.service.getCharacters().subscribe(res=>{
      this.characters = res.results;
      this.info = res.info;
    });
  }

  public navigate(id?: number){
    sessionStorage.setItem('id', id? id.toString() : '1');
    sessionStorage.setItem('category', 'character');
    this.router.navigate(['details']);
  }

  public onPageChanged(page:string){
    this.service.getCharacters(page).subscribe(res=>{
      this.characters = res.results;
      this.info = res.info;
    });
  }

}
