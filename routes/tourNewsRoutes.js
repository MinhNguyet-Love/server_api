// /routes/tourNewsRoutes.js
const express = require('express');
const router = express.Router();
const TourNews = require('../models/TourNews'); // Model cho TourNews

// Route để lấy danh sách tour news
router.get('/', async (req, res) => {
  try {
    const tourNews = await TourNews.find();
    res.json(tourNews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route để thêm một tour news mới
router.post('/', async (req, res) => {
  const { imageUrl, title, date, price, days } = req.body;

  const newTourNews = new TourNews({
    imageUrl,
    title,
    date,
    price,
    days,
  });

  try {
    const savedTourNews = await newTourNews.save();
    res.status(201).json(savedTourNews);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
