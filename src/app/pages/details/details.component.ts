import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character.model';
import { Episode } from 'src/app/model/episode.model';
import { RickAndMortyService } from 'src/app/service/rick-and-morty-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {

  public category: string | null = '';
  public id: string | null = '';

  public object: any;
  public characterList: Character[] = [];
  public episodeList: Episode[] = [];

  constructor(private router: Router, private service: RickAndMortyService) {
  }

  ngAfterViewInit(): void {
    this.category = sessionStorage.getItem('category');
    this.id = sessionStorage.getItem('id');

    if ( this.category == null || this.id == null){
      sessionStorage.clear();
      this.router.navigate(['main']);
    }

    if (this.category == 'episodes'){
      this.service.findEpisodeById(this.id != null? this.id: "1").subscribe(res => {
        this.object = res;
        res.characters?.forEach(item =>{
          this.service.findCharacterByUrl(item).subscribe(resp => this.characterList.push(resp));
        });
      });

    }else if (this.category == 'locations'){
      this.service.findLocationById(this.id != null? this.id: "1").subscribe(res => {
        this.object = res;
        res.residents?.forEach(item => {
          this.service.findCharacterByUrl(item).subscribe(resp => this.characterList.push(resp));
        });
      });
    }else{
      this.service.findCharacterById(this.id != null? this.id: "1").subscribe(res => {
        this.object = res;
        res.episode?.forEach(item => {
          this.service.findEpisodeByUrl(item).subscribe(resp => this.episodeList.push(resp));
        });
      });
    }
  }

}
