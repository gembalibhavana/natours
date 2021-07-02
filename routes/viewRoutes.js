const express = require('express');

const router = express.Router();

const authController = require('../controllers/authenticationControllers');

const viewsController = require('../controllers/viewsController');

const bookingController = require('../controllers/bookingController');

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);

router.get(
  '/tour/:slug',
  authController.isLoggedIn,
  //authController.protect,
  viewsController.getTour
);

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);

router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);
router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
module.exports = router;
