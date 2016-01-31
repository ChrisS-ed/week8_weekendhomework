var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  listInventory: function() {
    for (var i=0; i<this.inventory.length; i++) {
      console.log("Artist:", this.inventory[i].artist);
      console.log("Title:", this.inventory[i].title);
      console.log("Price: £", this.inventory[i].price);
      console.log("**************************************************************");
    }
  },
  sellRecord: function(record) {
    this.balance -= record.price;
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index,1);
  }
}

module.exports.Record = Record;
module.exports.RecordStore = RecordStore;