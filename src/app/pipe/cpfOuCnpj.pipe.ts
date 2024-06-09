import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfOuCnpj'
})
export class CpfOuCnpjPipe implements PipeTransform {

  transform(cpf: any): any {

    if (cpf) {

      let b: string = cpf.toString().replace(/\D/g, '');
      let ouvido = '';

      if (b.length > 11) {
        ouvido = b.replace(/^(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{0,2})/, '$1.$2.$3/$4-$5');
      } else if (b.length > 9) {
        ouvido = b.replace(/^(\d{3})?(\d{3})?(\d{3})?(\d{0,2})/, '$1.$2.$3-$4');
      } else if (b.length > 6) {
        ouvido = b.replace(/^(\d{3})?(\d{3})?(\d{0,3})/, '$1.$2.$3');
      } else if (b.length > 3) {
        ouvido = b.replace(/^(\d{3})?(\d{0,3})/, '$1.$2');
      } else if (b.length > 1) {
        ouvido = b.replace(/^(\d*)/, '$1');

      }


      return ouvido;
    }
  }

}
