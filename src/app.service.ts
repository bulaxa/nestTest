import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //boraaaa
    const result = 3+2;
    return result.toString();
  }
}
