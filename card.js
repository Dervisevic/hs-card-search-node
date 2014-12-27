var colors = require('colors');
var Table  = require('cli-table');

function Card(card) {
  this.card = card;
}

Card.prototype.getRarity = function() {
  switch (this.card.rarity) {
    case "Free":
      return "Free".gray; // Light black
    case "Common":
      return "Common".white; // White
    case "Rare":
      return "Rare".blue; // Light blue
    case "Epic":
      return "Epic".magenta; // Magenta
    case "Legendary":
      return "Legendary".yellow; // Yellow
    default:
      return this.card.rarity;
    }
};

Card.prototype.getPlayerClass = function() {
  switch (this.card.playerClass) {
    case "Priest":
      return "Priest".white;
    case "Druid":
      return "Druid".green;
    case "Mage":
      return "Mage".blue;
    case "Shaman":
      return "Shaman".blue;
    case "Paladin":
      return "Paladin".yellow;
    case "Warlock":
      return "Warlock".magenta;
    case "Hunter":
      return "Hunter".green;
    case "Rogue":
      return "Rogue".yellow;
    case "Warrior":
      return "Warrior".red;
    default:
      return this.card.playerClass;
  }
};

Card.prototype.cleanText = function(text) {
  if (text === "" || text === undefined) { return ""; }
  return text.replace(/<\/*[ib]\>/g, "");
};

Card.prototype.display = function() {
  var type = this.card.type;

  // Enchantments aren't cards
  if (type == "Enchantment") return false;

  // Specific settings to mae the table look somewhat good.
  var table = new Table({
    chars: {
      'top': '─'.white,
      'top-mid': '',
      'top-left': '┌'.white,
      'top-right': '┐'.white,
      'bottom': '─'.white,
      'bottom-mid': '',
      'bottom-left': '└'.white,
      'bottom-right': '┘'.white,
      'left': '│'.white,
      'left-mid': '',
      'mid': '',
      'mid-mid': '',
      'right': '│'.white,
      'right-mid': '',
      'middle': '│'.white
    }
  });

  table.push(['Name'.white, this.card.name]);
  table.push(['Cost'.yellow, this.card.cost]);
  if (type === 'Minion') { table.push(['Attack'.red, this.card.attack]); }
  if (type === 'Minion') { table.push(['Health'.green, this.card.health]); }
  if (type === 'Weapon') { table.push(['Durability'.green, this.card.durability]); }
  if (this.card.rarity !== undefined) { table.push(['Quality', this.getRarity()]); }
  if (this.card.playerClass !== undefined) { table.push(['Class', this.getPlayerClass()]); }
  table.push(['Type', type]);
  if (this.card.set !== undefined) { table.push(['Set', this.card.set]); }
  if (this.card.race !== undefined) { table.push(['Race', this.card.race]); }
  if (this.card.text !== undefined) { table.push(['Text', this.cleanText(this.card.text)]); }
  if (this.card.flavor !== undefined) { table.push(['Flavor', this.cleanText(this.card.flavor)]); }

  console.log(table.toString());
};

module.exports = Card;
