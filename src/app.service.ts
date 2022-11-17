import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('APP_KEY') private appKey: string,
    @Inject('TASK') private task: any[],
  ) {}
  getHello(): any {
    return {
      message: 'Hello World!',
      appKey: this.appKey,
      task: this.task,
    }
  }
}
