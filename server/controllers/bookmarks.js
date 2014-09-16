'use strict';

var Bookmark = require('../models/bookmark');

exports.all = function(req, res){
  Bookmark.findAll(req.user._id, function(err, bookmarks){
    res.send({bookmarks:bookmarks});
  });
};

exports.create = function(req, res){
  req.body.userId = req.user._id;
  Bookmark.create(req.body, function(err, bookmark){
    res.send({bookmark:bookmark});
  });
};

