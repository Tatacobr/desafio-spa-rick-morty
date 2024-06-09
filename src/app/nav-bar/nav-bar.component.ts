import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  perfil?: string;

  constructor(private router: Router) { }

  ngOnInit() {
    const aux = sessionStorage.getItem("perfil");

    if (aux != null)
      this.perfil = aux;
  }

  // logout() {
  //   sessionStorage.clear();
  //   this.router.navigate(['/login']);
  // }

  public main() {
    this.router.navigate(['/main']);
  }

  public locations(){
    this.router.navigate(['/locations']);
  }

  public episodes(){
    this.router.navigate(['/episodes']);
  }

  public characters(){
    this.router.navigate(['/characters']);
  }

}
