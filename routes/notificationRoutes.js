// /routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const TravelNews1 = require('../models/thongbao'); // Model cho Thông báo

// Route để lấy danh sách thông báo
router.get('/', async (req, res) => {
  try {
    const notifications = await TravelNews1.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
