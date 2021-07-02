const express = require('express');
const multer = require('multer');
const UserController = require('../controllers/userControllers');

const authController = require('../controllers/authenticationControllers');

const { getAllUsers, getUser, updateUser, deleteUser, createUser } =
  UserController;

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.get('/me', UserController.getMe, getUser);
router.delete('/deleteMe', UserController.deleteMe);
router.patch('/updateMyPassword', authController.updatePassword);
router.patch(
  '/updateMe',
  UserController.uploadUserPhoto,
  UserController.resizeUserPhoto,
  UserController.updateMe
);

router.use(authController.restrictTo('admin'));
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
