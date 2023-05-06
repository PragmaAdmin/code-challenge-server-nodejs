const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

const beerData = [
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

app.use(cors());

app.get('/temperature', async (req, res) => {
  try {
    const dataArray = [];

    for (const item of beerData) {
      const response = await fetch(`https://hasydbj5c4gpa2oozfpjpc677a0hxuob.lambda-url.ap-southeast-2.on.aws/sensor/${item.id}`);
      const data = await response.json();
      const newData ={...data, ...item};
      dataArray.push(newData);
    }

    res.status(200).send(dataArray);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
