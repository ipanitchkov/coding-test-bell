# The project demonstrates a Node.js/TypeScript library that calculates total cost of orders based on province taxes and discounts

## Project content

The project consists of two components and a Postman collection:
1. The library under the `calculate-total-cost` folder.
2. A server application under the `test-app` folder that is using the library and provides an interface to deal with the functionality.
3. A Postman collection holding test requests could be found under the main folder of the project.

Actual cost calculations are in `calculate-total-cost/src/test.ts`.

Unit tests are in `calculate-total-cost/src/test.spec.ts`.

## Instructions

In order to run the project you need to install the dependencies:

1. Go to the `calculate-total-cost` folder and perform **npm install**.
2. Go to the `test-app` folder and perform **npm install**.

Once installed run the application by issuing **npm run start:dev** from inside the `test-app` folder.

The server application will be accepting http requests on port 3000.

## Playground

### Testing the library by using the provided server side application

You could use Postman to perform http calls to the system. 

The application is accepting POST requests to http://localhost:3000/

The expected payload should have the following structure:
```json
{
    "numOfItems": 500,
    "pricePerItem": 1,
    "provinceCode": "ON"
}
```

### Testing the library by running provided unit tests

You could run all suite tests from command line inside the `calculate-total-cost` folder as below:
* `npm run test`

## Extras

* Prettier support
* TSLint support
* Unit tests
* Written in TypeScript
