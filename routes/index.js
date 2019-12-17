const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find().exec((err, posts) => {
    res.render('index', { posts: posts });
  });
});

router.get('/newpost', (req, res ) => {
  res.render('newpost');
});

router.get('/post/:id', (req, res) => {
  res.render('post');
});

module.exports = router;
