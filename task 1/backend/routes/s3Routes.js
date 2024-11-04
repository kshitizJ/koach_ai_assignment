const express = require('express')
const { retrieveJson, storeJson } = require('../services/s3Service')

const router = express.Router();

router.get('/retrieve', retrieveJson);
router.post('/store', storeJson);

module.exports = router;