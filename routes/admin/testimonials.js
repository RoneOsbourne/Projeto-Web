var express = require('express');
var router = express.Router();
var testimonialsService = require('../../services/testimonialsService');

router.get('/', function(req, res, next) {
  var testimonials = testimonialsService.getTestimonials();

  var data = {
    testimonials: testimonials
  };

  res.render('testimonials', data);
});

router.post('/create', function(req, res, next) {
  var testimonials = testimonialsService.getTestimonials();

  var newId = testimonials.length + 1;

  var newTestimonial = {};
  newTestimonial.id = newId;
  newTestimonial.name = req.body.name;
  newTestimonial.company = req.body.company;
  newTestimonial.title = req.body.title;
  newTestimonial.testimony = req.body.testimony;

  testimonialsService.saveTestimonials(newTestimonial);

  res.redirect('/testimonials');
});


module.exports = router;