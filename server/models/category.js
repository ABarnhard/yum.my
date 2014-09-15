'use strict';

function Category(){
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.findAll = function(userId, cb){
  Category.collection.find({userId:userId}).toArray(cb);
};

Category.create = function(o, cb){
  Category.collection.save(o, cb);
};

module.exports = Category;

