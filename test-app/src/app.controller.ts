import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { calculateTotalCost } from '@panitchkov/calculate-total-cost';

interface Payload {
  numOfItems: number;
  pricePerItem: number;
  provinceCode: string;
}

@Controller()
export class AppController {
  @Post()
  calculateTotalCost(@Body() payload: Payload): string {
    try {
      const { numOfItems, pricePerItem, provinceCode } = payload;

      return calculateTotalCost(numOfItems, pricePerItem, provinceCode);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.message);
    }
  }
}
