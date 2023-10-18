const Express = require("express");
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../Controllers/bookController");

const BookRoute = Express.Router();

BookRoute.get("/", getAllBooks);
BookRoute.post("/add", createBook);
BookRoute.post("/update", updateBook);
BookRoute.post("/delete", deleteBook);

module.exports = BookRoute;
