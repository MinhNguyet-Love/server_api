const TravelNews = require('../models/travelNewsModel');

exports.getAllNews = async (req, res) => {
  try {
    const news = await TravelNews.find();
    res.render('index', { news });
  } catch (err) {
    res.status(500).send('Error fetching news.');
  }
};

exports.addNews = async (req, res) => {
  const { imageUrl, title, date } = req.body;
  try {
    const newNews = new TravelNews({ imageUrl, title, date });
    await newNews.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error adding news.');
  }
};

exports.updateNews = async (req, res) => {
  const { id } = req.params;
  const { imageUrl, title, date } = req.body;
  try {
    await TravelNews.findByIdAndUpdate(id, { imageUrl, title, date });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error updating news.');
  }
};

exports.deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    await TravelNews.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting news.');
  }
};
