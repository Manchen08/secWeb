var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');

var Schema = mongoose.Schema;

var tempDataSchema = new Schema({
  temp: {type: String, required: true},
  date: String,
  location: String
}, {collection: 'temp-data'}); // overwrite the default of pluralizing UserData

var TempData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/saveTemp', function(req,res,next){
  var user = {
    name: req.body.name,
    email: req.body.email
  };

  var data = new UserData(user);
  data.save();
  res.redirect('/');
});

module.exports = router;
