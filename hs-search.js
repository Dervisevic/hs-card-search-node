#!/usr/bin/env node

var commander = require('commander');
var Card      = require('./card.js');
var s         = require('./search.js');
var Search    = s.search;
var _         = s._;

commander
.version('1.0.0')
.option('-c, --card [name]', 'Find a card by it\'s name.')
.option('-t, --text [text]', 'Search via the text on the card.')
.option('-a, --all [all]', 'Search card via both name and text.')
.parse(process.argv);

var search = new Search();

// If any command is entered, othwise show help.
if (commander.card || commander.text || commander.all) {
  var results = [];
  if (commander.card) {
    results.push(search.search(commander.card, 'name'));
  }
  else if (commander.text) {
    results.push(search.search(commander.text, 'text'));
  }
  else {
    results.push(search.search(commander.all, 'name'));
    results.push(search.search(commander.all, 'text'));
  }

  var cards = _.union.apply(null, results);
  cards.forEach(function(card) {
    var displayCard = new Card(card);
    displayCard.display();
  });
}
else {
  commander.help();
}
