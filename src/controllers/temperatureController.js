const axios = require('axios');

const getAllTemperatures = (req, res) => {
    (async () => {
        try {
            let promises = [];
            let result = [];

            let currentPage = 1;

            while (currentPage <= 6) {
                promises.push(axios.get(
                    `https://temperature-sensor-service.herokuapp.com/sensor/${currentPage}`,
                ));
                currentPage++;
            }

            const data = await Promise.all(promises);
            data.forEach(({data}) => {
                result.push(data);
            });
            res.send(
                result);
        } catch (error) {
            console.error(error);
        }
    })();
};

const getOneTemperature = (req, res) => {
    const {temperatureId} = req.params;
    axios.get(`https://temperature-sensor-service.herokuapp.com/sensor/${temperatureId}`).then(resp => {
        res.send(resp.data);
    });
};

module.exports = {
    getAllTemperatures,
    getOneTemperature,
};
