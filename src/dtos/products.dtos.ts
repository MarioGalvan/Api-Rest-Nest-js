import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import {PartialType} from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsString()
  readonly image: string;
  @IsNumber()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}