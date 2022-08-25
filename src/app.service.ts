import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //boraaaa
    const result = 3+2;
    if(result === 4){
      return result.toString();
    }else{
      return 'falhou';
    }
    
  }
}
