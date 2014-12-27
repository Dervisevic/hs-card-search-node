var fs = require('fs');
var path = require('path');
var _ = require('underscore');

function Search() {
  this.sets = JSON.parse(fs.readFileSync(path.join(__dirname, './data') + '/sets.json', 'utf8'));
  this.rawCards = JSON.parse(fs.readFileSync(path.join(__dirname, './data') + '/cards.json', 'utf8'));
  this.sets = _.without(this.sets, 'Credits', 'Debug', 'Missions', 'System');
  this.list = [];

  // Build a single array with all cards
  var search = this;
  this.sets.forEach(function(set) {
    _.each(search.rawCards[set], function(card) {
      card.set = set;
      search.list.push(card);
    });
  });
}

// Term is the search term. Key is what is searched for. Right now it's
// only for text values, as cost, attack etc isn't that useful
Search.prototype.search = function(term, key) {
  key = key || 'name';
  if (term === '') { return []; }
  return _.filter(this.list, function(c) {
    if (c.hasOwnProperty(key)) {
      return c[key].toLowerCase().indexOf(term.toLowerCase()) !== -1;
    }
    return false;

  });
};

module.exports = {
  search: Search,
  _: _
};
