// // /routes/travelNewsRoutes.js
// const express = require('express');
// const router = express.Router();
// const TravelNews = require('../models/TravelNews'); // Model cho TravelNews

// // Route để lấy danh sách tin tức du lịch
// router.get('/', async (req, res) => {
//   try {
//     const news = await TravelNews.find();
//     res.json(news);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const travelNewsController = require('../controllers/travelNewsController');

router.get('/', travelNewsController.getAllNews);
router.post('/add', travelNewsController.addNews);
router.post('/update/:id', travelNewsController.updateNews);
router.post('/delete/:id', travelNewsController.deleteNews);

module.exports = router;
