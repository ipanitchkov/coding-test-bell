import * as joi from 'joi';
import { discountRates, taxRatesByProvince } from './rates';

const payloadSchema = joi.object().keys({
  numOfItems: joi
    .number()
    .integer()
    .positive()
    .allow(0)
    .required(),
  pricePerItem: joi
    .number()
    .positive()
    .required(),
  provinceCode: joi
    .string()
    .valid('AB', 'ON', 'QC', 'MI', 'DE')
    .required(),
});

export function calculateTotalCost(
  numOfItems,
  pricePerItem,
  provinceCode,
): string {
  const { error } = payloadSchema.validate({
    numOfItems,
    pricePerItem,
    provinceCode,
  });

  if (error) {
    throw error;
  }

  const taxes = taxRatesByProvince[provinceCode];
  const orderValue = numOfItems * pricePerItem;
  const discount = discountRates.find(currentDiscount => {
    return currentDiscount.orderValue <= orderValue;
  }) || { discountRate: 0 };

  const cost = orderValue - (orderValue * discount.discountRate) / 100;
  const totalTaxes = (cost * taxes) / 100;
  const totalCost = cost + totalTaxes;

  return `$${totalCost.toFixed(2)}`;
}
