import * as assert from 'assert';
import { calculateTotalCost } from './test';

describe('calculateTotalCost', () => {
  it('should fail as numOfItems is not a number', () => {
    try {
      calculateTotalCost('something', 1, 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"numOfItems" must be a number');
    }
  });

  it('should fail as numOfItems is not an integer', () => {
    try {
      calculateTotalCost(500.5, 1, 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"numOfItems" must be an integer');
    }
  });

  it('should fail as numOfItems is not a positive number', () => {
    try {
      calculateTotalCost(-500, 1, 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"numOfItems" must be a positive number');
    }
  });

  it('should fail as numOfItems is not provided', () => {
    try {
      calculateTotalCost(undefined, 1, 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"numOfItems" is required');
    }
  });

  it('should fail as pricePerItem is not a number', () => {
    try {
      calculateTotalCost(500, 'something', 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"pricePerItem" must be a number');
    }
  });

  it('should fail as pricePerItem is not a positive number', () => {
    try {
      calculateTotalCost(500, -1, 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(
        err.message,
        '"pricePerItem" must be a positive number',
      );
    }
  });

  it('should fail as pricePerItem is not provided', () => {
    try {
      calculateTotalCost(500, undefined, 'ON');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"pricePerItem" is required');
    }
  });

  it('should fail as provinceCode is not a string', () => {
    try {
      calculateTotalCost(500, 1, 123);
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(
        err.message,
        '"provinceCode" must be one of [AB, ON, QC, MI, DE]',
      );
    }
  });

  it('should fail as provinceCode is not valid', () => {
    try {
      calculateTotalCost(500, 1, 'something');
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(
        err.message,
        '"provinceCode" must be one of [AB, ON, QC, MI, DE]',
      );
    }
  });

  it('should fail as provinceCode is not provided', () => {
    try {
      calculateTotalCost(500, 1, undefined);
      assert.fail('Should fail');
    } catch (err) {
      assert.strictEqual(err.message, '"provinceCode" is required');
    }
  });

  it('should calculate Ontario taxes and total cost', () => {
    expect(calculateTotalCost(500, 1, 'ON')).toBe('$565.00');
  });

  it('should calculate Michigan taxes and total cost', () => {
    expect(calculateTotalCost(3600, 2.25, 'MI')).toBe('$7984.98');
  });
});
