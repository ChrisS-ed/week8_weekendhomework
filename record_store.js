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
    console.log("*".repeat(70));
    for (var i=0; i<this.inventory.length; i++) {
      console.log("Artist:", this.inventory[i].artist);
      console.log("Title:", this.inventory[i].title);
      console.log("Price: £", this.inventory[i].price);
      console.log("*".repeat(70));
    }
  },
  sellRecord: function(record) {
    this.balance -= record.price;
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index,1);
  },
  reportFinances: function() {
    var inventoryValue = 0;
    for (var i=0; i<this.inventory.length; i++) {
      inventoryValue += this.inventory[i].price;
    }
    console.log("*".repeat(70));
    console.log("Record store balance: £", this.balance);
    console.log("Total value of inventory: £", inventoryValue);
    console.log("*".repeat(70));
    return inventoryValue;
  }
}

var RecordCollector = function(name, cash) {
  this.name = name;
  this.cash = cash;
  this.recordCollection = [];
}
RecordCollector.prototype = {
  buy: function(record, store) {
    store.balance += record.price;
    this.cash -= record.price;
    var index = store.inventory.indexOf(record);
    store.inventory.splice(index,1);
    this.recordCollection.push(record);
  }
}

module.exports.Record = Record;
module.exports.RecordStore = RecordStore;
module.exports.RecordCollector = RecordCollector;
