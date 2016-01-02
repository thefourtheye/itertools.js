const util = require('util');
function ValueError(message) {
  this.name = 'ValueError';
  this.message = message;
  this.stack = (new Error()).stack;
}
util.inherits(ValueError, Error);
module.exports = ValueError;
