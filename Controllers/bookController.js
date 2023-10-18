const mongoose = require("mongoose");

const { BookModels } = require("../Model/BookModels");

const getAllBooks = async (req, res, next) => {
  let books;

  try {
    books = await BookModels.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ message: "books not found" });
  }

  return res.status(200).json({ books });
};

const createBook = async (req, res, next) => {
  const { title, author, genre, publicationYear } = req.body;

  let book;

  try {
    const bookProduct = new BookModels({
      title,
      author,
      genre,
      publicationYear,
    });

    book = await bookProduct.save();
  } catch (error) {
    return console.log(error);
  }
  if (!book) {
    return res.status(200).json({ msg: "unable to add it" });
  }

  return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  const { title, author, genre, publicationYear, id } = req.body;

  // console.log(id)
  let book;

  try {
    book = await BookModels.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      publicationYear,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "unable to update it" });
  }

  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const { id } = req.body;

  let books;

  try {
    await BookModels.findByIdAndRemove(id);
    books = await BookModels.find();
  } catch (error) {
    return console.log(error);
  }

  if (!books) {
    return res.status(500).json({ message: "unable to delete it" });
  }

  return res.status(200).json({ books });
};
module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
