const fs = require('fs');

var getTestimonials = function() {

    testimonials = fs.readFileSync('db/testimonials.json', 'utf8');
    testimonials = JSON.parse(testimonials);

    return testimonials;

  }
  
  var testimonialsFilePath = 'db/testimonials.json';
  
  var loadFileTestimonials = function() {
    var fileData = fs.readFileSync(testimonialsFilePath, 'utf8');
    var testimonials = JSON.parse(fileData);

    return testimonials;
  }
  
  var getTestimonials = function() {
    var testimonials = loadFileTestimonials();
    return testimonials;
  }
  
  var saveFileTestimonials = function(testimonials) {
    var data = JSON.stringify(testimonials);
    fs.writeFileSync(testimonialsFilePath, data, 'utf8');
  }
  
  var saveTestimonials = function(newTestimonial) {
    var Testimonials = loadFileTestimonials();
    Testimonials.push(newTestimonial);
    saveFileTestimonials(Testimonials);
  }

  module.exports = {
    getTestimonials: getTestimonials,
    saveTestimonials: saveTestimonials
  }