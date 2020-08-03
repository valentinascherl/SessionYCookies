var express = require('express');
var router = express.Router();
var mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.index);
router.post('/color', mainController.color);

router.get('/queColorEs', mainController.queColorEs);
router.get('/borrar', mainController.borrar);



module.exports = router;
