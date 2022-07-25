const express = require('express');
const router = express.Router();
const siteController = require('../controller/siteController')

router.get('/contact-us', siteController.contact_get)

router.get('/products', siteController.product_get)

router.get('/laptop/:id', siteController.details_get)

router.get('/about-us',siteController.about_get)
module.exports = router;