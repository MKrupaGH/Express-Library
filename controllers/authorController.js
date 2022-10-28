const { next } = require("cli");
const Author = require("../models/author");

exports.author_list = (req, res) => {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec(function (err, list_authors) {
      if (err) next(err);
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};

exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};