import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Welcome to the Todo API. Please visit /api for the documentation."
  }
}
