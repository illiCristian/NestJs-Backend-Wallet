import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //Este seria el endpoint principal http://localhost:8000/api
  getHello(): string {
    return 'Hello World!';
  }
}
