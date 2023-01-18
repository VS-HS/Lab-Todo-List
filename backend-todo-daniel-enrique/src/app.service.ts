import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const link = '/api';
    return (
      'Welcome to the Todo API. Please visit ' +
      `<a href="${link}">${link}</a>` +
      ' for the documentation.'
    );
  }
}
