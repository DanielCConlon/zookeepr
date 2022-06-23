const router = require('express').Router();
const animalRoutes = require('../apiroutes/animalRoutes');


router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;