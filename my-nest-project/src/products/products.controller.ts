import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): any {
    return {
      message: 'Get all products',
    };
  }
}
