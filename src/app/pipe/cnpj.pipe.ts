import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(cnpj: string): string {
    if (cnpj){

      let b : string = cnpj.toString().replace(/\D/g, '');
      let ouvido = '';

      if (b.length > 12){
        ouvido = b.replace(/^(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{0,2})/, '$1.$2.$3/$4-$5');
      }else if (b.length > 8){
        ouvido = b.replace(/^(\d{2})?(\d{3})?(\d{3})?(\d{0,4})/, '$1.$2.$3/$4');
      }else if (b.length > 5){
        ouvido = b.replace(/^(\d{2})?(\d{3})?(\d{0,3})/, '$1.$2.$3');
      }else if (b.length > 2){
        ouvido = b.replace(/^(\d{2})?(\d{0,3})/, '$1.$2');
      }else if (b.length > 1){
        ouvido = b.replace(/^(\d*)/, '$1');
      }
  
      return ouvido;
    }
    return "";
  }

}
