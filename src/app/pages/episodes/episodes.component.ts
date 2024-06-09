import { Component, OnInit } from '@angular/core';
import { Episode } from '../../model/episode.model';
import { RickAndMortyService } from '../../service/rick-and-morty-service';
import { Router } from '@angular/router';
import { Info } from 'src/app/model/rick-and-morty.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public episodes?: Episode[];
  public info?: Info;

  constructor(private service: RickAndMortyService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.service.getEpisodes().subscribe(res=>{
      this.episodes = res.results;
      this.info = res.info;
    });
  }

  public navigate(id?: number){
    sessionStorage.setItem('id', id? id.toString() : '1');
    sessionStorage.setItem('category', 'episodes');
    this.router.navigate(['details']);
  }

  public onPageChanged(page:string){
    this.service.getEpisodes(page).subscribe(res=>{
      this.episodes = res.results;
      this.info = res.info;
    });
  }

}
