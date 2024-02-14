
import Book from "../models/bookModel.js";

// Endpoint to fetch new release books
const getNewReleases = async (req, res) => {
  try {
    const newReleaseBooks = await Book.find({
      publishedDate: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
    }).sort({ publishedDate: -1 });
    res.json(newReleaseBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Endpoint to fetch coming soon books
const getComingSoon = async (req, res) => {
  try {
    const comingSoonBooks = await Book.find({
      publishedDate: { $gt: new Date() }
    }).sort({ publishedDate: 1 });
    res.json(comingSoonBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Endpoint to fetch best seller books
const getBestSellers = async (req, res) => {
  try {
    const bestSellerBooks = await Book.find().sort({ salesCount: -1 }).limit(5);
    res.json(bestSellerBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Endpoint to fetch free books
const getFreeBooks = async (req, res) => {
  try {
    const freeBooks = await Book.find({ price: 0 });
    res.json(freeBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export {
  getNewReleases,
  getComingSoon,
  getBestSellers,
  getFreeBooks,
};
