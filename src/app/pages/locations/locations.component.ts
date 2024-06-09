import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty-service';
import { Router } from '@angular/router';
import { Location } from '../../model/location.model';
import { Info } from 'src/app/model/rick-and-morty.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  public locations?: Location[] = [];
  public info?: Info;

  constructor(private service: RickAndMortyService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.service.getLocation().subscribe(res=>{
      this.locations = res.results;
      this.info = res.info;
    });
  }

  public navigate(id?: number){
    sessionStorage.setItem('id', id? id.toString() : '1');
    sessionStorage.setItem('category', 'locations');
    this.router.navigate(['details']);
  }

  public onPageChanged(page:string){
    this.service.getLocation(page).subscribe(res=>{
      this.locations = res.results;
      this.info = res.info;
    });
  }
}
