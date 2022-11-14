import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: string): any {
    return this.productsService.findOne(productId);
    // return {
    //   message: 'Product',
    //   productId,
    // }
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }): string {
    return `Product ${productId} from Category ${categoryId}`;
  }

  @Get('/')
  getAllProducts(@Query() { limit = 100, offset = 0 }): any {
    console.log('data=>>>', limit, offset);
    return this.productsService.findAll();
    // return `All Products - Limit: ${limit} Offset: ${offset}`;
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto): any {
    return this.productsService.create(payload);
    // return {
    //   message: 'Product Created',
    //   payload,
    // };
  }

  @Put(':id')
  updateProduct(@Param() { id }, @Body() payload: UpdateProductDto): any {
    return this.productsService.update(id, payload);
    // return {
    //   message: 'Product Updated',
    //   id,
    // };
  }

  @Delete(':id')
  deleteProduct(@Param() { id }): any {
    return {
      message: 'Product Deleted',
      id,
    };
  }
}
