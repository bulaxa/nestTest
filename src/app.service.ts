import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getValue(){
    const b = 12;
    if (b) {
      return b;
    }
    return b;
  }
  
    
  }
}
