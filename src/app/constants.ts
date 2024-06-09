import { Router } from "@angular/router";

export class Constants {
  static readonly DATE_FMT = 'dd/MMM/yyyy';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
  public static URL: string = "https://rickandmortyapi.com/api";
}

export class MetodosGlobais {

  public preparaValor(valor:number): string{

    let formatter = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(valor/100);
    return formatter;
  }

  public apagaInput(idHtml:string){
    (document.getElementById(idHtml) as HTMLInputElement).value = "";
  }

  

  public monitor(router: Router): void{
    let perfil = sessionStorage.getItem("perfil");
    
    if (perfil != 'DEV' && perfil != 'USER'){
        router.navigate(['login']);
    }
  }

  public formataDataToString(b: Date): string{
    let hoje : string = b.getFullYear()
              +`-`+((b.getMonth()+1)>9 ? (b.getMonth()+1) : "0"+(b.getMonth()+1))
              +`-`+ ((b.getDate() > 9) ? b.getDate() : "0"+b.getDate());

    return hoje;
  }

  public arremessaInputNaVariavel(id: string): string{
    return (document.getElementById(id) as HTMLInputElement).value;
  }
  
}