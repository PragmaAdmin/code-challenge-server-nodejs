const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

const beers = require('./beers');

app.use(cors());

app.get('/beers', (req, res) => {
  res.status(200).send({
    beers: beers.getBeersDataset().map(beer => ({
      id: beer.id, 
      name: beer.name,
      temperature: null,
      status: beers.status.UNKNOWN
    }))
  })
});

app.get('/temperature/:id', (req, res) => {
  const beer = beers.getBeersDataset().filter(beer => beer.id === req.params.id)[0];

  if (beer) {
    fetch(`https://temperature-sensor-service.herokuapp.com/sensor/${beer.id}`)
      .then((response) => response.json())
      .then((response) =>                   
        res.send({
          temperature: response.temperature,
          status: beers.checkBeerTemperatureStatus(beer, response.temperature)
        })
      );
  }
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});