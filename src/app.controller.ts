import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface UserInterface {
  id?: number;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:name')
  getHello2(@Param() params: UserInterface): string {
    return this.appService.getHello(params.name);
  }

  
}
