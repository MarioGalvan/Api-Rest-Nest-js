import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, ProductsModule, HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        const task = await firstValueFrom(
          http.get('https://jsonplaceholder.typicode.com/todos'),
        );
        return task.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
