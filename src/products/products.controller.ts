import { Controller, Get, Param, Query, Post,Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `Product ${productId}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }): string {
    return `Product ${productId} from Category ${categoryId}`;
  }

  @Get('/')
  getAllProducts(@Query() { limit = 100, offset = 0 }): string {
    console.log('data=>>>', limit, offset);
    return `All Products - Limit: ${limit} Offset: ${offset}`;
  }

  @Post()
  createProduct(@Body() payload: any): any {
    return {
        message: 'Product Created',
        payload
    }
  }
}
