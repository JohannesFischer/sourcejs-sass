var path = require('path');
var specUtils = require(path.join(global.pathToApp,'core/lib/specUtils'));
var cheerio = require('cheerio');
var sass = require('node-sass');

/*
 * Get html from response and parse linked sass files
 *
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - The callback function
 * */
exports.process = function (req, res, next) {
  if (req.specData && req.specData.renderedHtml) {
    var specDir = specUtils.getFullPathToSpec(req.path);
    var $ = cheerio.load(req.specData.renderedHtml);
    var links = $('link[href$=".scss"]');

    const files = $('link[href$=".scss"]').map(function(i, el) {
      return specDir + '/' + $(this).attr('href');
    }).get();

    for (let i = 0; i < files.length; i++) {
      var result = sass.renderSync({
        file: files[i],
        outputStyle: 'compressed'
      });

      if (result) {
        var style = $('<style type="text/css">' + result.css.toString() + '</style>');
        $('h1').before(style);
      }
    }

    links.remove();

    req.specData.renderedHtml = $.html();
  }

  next();
};