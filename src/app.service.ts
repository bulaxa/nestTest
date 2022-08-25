import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const numero: number = 2;
    if (numero) {
      return 'Sucesso';
    }else{
      return 'Falhouuuu';
    }
    
  }
}
