const beers = require('./beers');

test('check a beer with a low temperature', () => {
  const temperature = 3;
  const beer = { minimumTemperature: 4, maximumTemperature: 5 };
  expect(beers.checkBeerTemperatureStatus(beer, temperature)).toBe(beers.status.LOW);
});

test('check a beer with a high temperature', () => {
  const temperature = 6;
  const beer = { minimumTemperature: 4, maximumTemperature: 5 };
  expect(beers.checkBeerTemperatureStatus(beer, temperature)).toBe(beers.status.HIGH);
});

test('check a beer with a a good temperature', () => {
  let temperature = 4;
  const beer = { minimumTemperature: 4, maximumTemperature: 6 };
  expect(beers.checkBeerTemperatureStatus(beer, temperature++)).toBe(beers.status.OK);
  expect(beers.checkBeerTemperatureStatus(beer, temperature++)).toBe(beers.status.OK);
  expect(beers.checkBeerTemperatureStatus(beer, temperature++)).toBe(beers.status.OK);
});