const express = require("express");
const temperatureController = require("../../controllers/temperatureController");
const router = express.Router();

/**
 * @openapi
 * /api/v1/temperature:
 *   get:
 *       description: Get Temperatures
 *       responses:
 *       200:
 *           description: Success
 */
router.get("/", temperatureController.getAllTemperatures);

/**
 * @openapi
 * /api/v1/temperature/{temperatureId}:
 *   get:
 *       description: Get Temperature
 *       parameters:
 *        - in: path
 *          name: temperatureId
 *          required: true
 *          type: integer
 */
router.get("/:temperatureId", temperatureController.getOneTemperature);

module.exports = router;
