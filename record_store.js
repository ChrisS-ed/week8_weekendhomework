var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}

var RecordStore = function(name, city, inventory) {
  this.name = name;
  this.city = city;
  this.inventory = inventory;
}

module.exports.Record = Record;
module.exports.RecordStore = RecordStore;