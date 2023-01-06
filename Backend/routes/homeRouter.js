const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/homeController');

router.get('/', home_controller.shop_details_get);
router.get('/img', home_controller.shop_img_get);
router.get('/search/:shopName', home_controller.shop_search_get); // Search router

module.exports = router;