const express = require("express");
const v1TemperatureRouter = require("./v1/routes/temperatureRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;


app.use("/api/v1/temperature", v1TemperatureRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});
module.exports = app;
