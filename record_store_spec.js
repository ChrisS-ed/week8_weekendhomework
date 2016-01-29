

// Create a RecordStore that has a name, city and multiple records in it's inventory
// Give the RecordStore a balance i.e. cash in bank.
// Add some records to your RecordStore.
// Create a method that lists the inventory.
// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// Create a method that reports on the financial situation of the store. Cash and value of inventory.
// Create a RecordCollector (or customer) constructor who can buy and sell records.
// Use TDD all the way through!

var Record = require("./record_store.js").Record;

var assert =  require("assert");

describe('Record', function(){
  // Create a constructor to create Record objects with artist, title, price
  it("should have artist, title and price", function(){
    var record60s = new Record("The Doors", "Waiting For The Sun", 12);
    assert.equal(record60s.artist, "The Doors");
    assert.equal(record60s.title, "Waiting For The Sun");
    assert.equal(record60s.price, 12);
  });

  // Create a few records
  it("should have multiple records", function(){
    var record60s = new Record("The Doors", "Waiting For The Sun", 12);
    var record70s = new Record("David Bowie", "The Rise and Fall of Ziggy Stardust", 10);
    var record80s = new Record("Pixies", "Surfer Rosa", 8);
    var record90s = new Record("Beck", "Odelay", 9);
    assert.equal(record70s.artist, "David Bowie");
    assert.equal(record80s.price, 8);
    assert.equal(record90s.title, "Odelay");
  })
})

