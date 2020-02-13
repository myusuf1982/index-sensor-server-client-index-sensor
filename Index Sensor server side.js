
var express = require('express');
var router = express.Router();
var Sensor = require('../models/sensor'); // buat sendiri
var Daftarsensor = require('../models/daftarsensor'); // buat sendiri

//xc var rpio = require('rpio');  //jperkin
var isi_interval = [];
  
//hanya render sensor,  handlebars template view

//punya datatable renders
router.get('/iot/indexsensor', isLoggedIn, function (req, res, next) { 
  var ini =[], array1 = [3,5,7,8,10,11,12,13,15,16,18,19,21,22,23,24,26,29,31,32,33,35,36,37,38, 40] // pin pin GPIO raspi
  Sensor.find({"enable":true}, function (err, result) {if (err) {console.log("SENSOR GAGAL find"+err);};
 
 for(var i=0; i<result.length; i++){ ini[i]=parseInt(result[i].pin)}

  array1 = array1.filter(function(val) {return ini.indexOf(val) == -1;});

res.render('iot/indexsensor', {
  halo: req.user,
  pilih_pin : array1
});
});
});
