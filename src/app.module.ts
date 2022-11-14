import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
