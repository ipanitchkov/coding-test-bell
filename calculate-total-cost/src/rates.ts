const discountRates = [
  { orderValue: 10000, discountRate: 10 },
  { orderValue: 7000, discountRate: 7 },
  { orderValue: 5000, discountRate: 5 },
  { orderValue: 1000, discountRate: 3 },
];

const taxRatesByProvince: { [province: string]: number } = {
  AB: 5,
  ON: 13,
  QC: 14.975,
  MI: 6,
  DE: 0,
};

export { discountRates, taxRatesByProvince };
