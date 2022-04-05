const beers = [
  {
    id: '1',
    name: 'Pilsner',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: '2',
    name: 'IPA',
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: '3',
    name: 'Lager',
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: '4',
    name: 'Stout',
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: '5',
    name: 'Wheat beer',
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: '6',
    name: 'Pale Ale',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

const getBeersDataset = () => {
  return beers.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
}

const LOW = 'LOW';
const HIGH = 'HIGH';
const OK = 'OK';
const UNKNOWN = 'UNKNOWN';

const checkBeerTemperatureStatus = (beer, temperature) => {
  if (temperature < beer.minimumTemperature) return LOW;

  if (temperature > beer.maximumTemperature) return HIGH;

  if (temperature <= beer.maximumTemperature 
    && temperature >= beer.minimumTemperature) return OK;

  return UNKNOWN;
};


module.exports = {
  getBeersDataset,
  checkBeerTemperatureStatus,
  status: {LOW, HIGH, OK, UNKNOWN}
};