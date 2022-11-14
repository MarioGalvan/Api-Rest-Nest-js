import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image: '',
      stock: 20,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      image: '',
      stock: 20,
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      image: '',
      stock: 20,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    let product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: String(this.counterId),
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: string) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    this.products = this.products.filter((item) => item.id !== id);
    return product;
  }
}
