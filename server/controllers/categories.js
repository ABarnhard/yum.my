'use strict';

var Category = require('../models/category');

exports.all = function(req, res){
  Category.findAll(req.user._id, function(err, categories){
    res.send({categories:categories});
  });
};

exports.create = function(req, res){
  req.body.userId = req.user._id;
  Category.create(req.body, function(err, category){
    res.send({category:category});
  });
};

