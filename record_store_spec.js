


// Create a method that reports on the financial situation of the store. Cash and value of inventory.
// Create a RecordCollector (or customer) constructor who can buy and sell records.
// Use TDD all the way through!

var Record = require("./record_store.js").Record;
var RecordStore = require("./record_store.js").RecordStore;

var assert =  require("assert");

describe("Record", function(){
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

// Create a RecordStore that has a name, city and multiple records in it's inventory
describe("RecordStore", function() {
  it("should have a name, city and multiple records in its inventory", function(){
    var record60s = new Record("The Doors", "Waiting For The Sun", 12);
    var record70s = new Record("David Bowie", "The Rise and Fall of Ziggy Stardust", 10);
    var record80s = new Record("Pixies", "Surfer Rosa", 8);
    var record90s = new Record("Beck", "Odelay", 9);
    var myRecordStore = new RecordStore("Scratched Records", "Edinburgh");
    myRecordStore.inventory = [record60s, record70s, record80s, record90s];
    assert.deepEqual(myRecordStore.inventory, [record60s, record70s, record80s, record90s]);
  });

  // Give the RecordStore a balance i.e. cash in bank.
  it("should have a balance i.e. cash in bank", function(){
    var myRecordStore = new RecordStore("Scratched Records", "Edinburgh");
    myRecordStore.balance = 2000;
    assert.equal(myRecordStore.balance, 2000);
  });

  // Add some records to your RecordStore.
  it("should be able to have records added to it", function(){
    var myRecordStore = new RecordStore("Scratched Records", "Edinburgh");
    var record60s = new Record("The Doors", "Waiting For The Sun", 12);
    var record70s = new Record("David Bowie", "The Rise and Fall of Ziggy Stardust", 10);
    var record80s = new Record("Pixies", "Surfer Rosa", 8);
    var record90s = new Record("Beck", "Odelay", 9);
    myRecordStore.inventory = [record60s, record70s, record80s, record90s];
    var record00s = new Record("Sufjan Stevens", "Illinois", 8);
    var record10s = new Record("Disclosure", "Settle", 8);
    myRecordStore.inventory.push(record00s);
    myRecordStore.inventory.push(record10s);
    assert.deepEqual(myRecordStore.inventory, [record60s, record70s, record80s, record90s, record00s, record10s]);
  });

  // Create a method that lists the inventory.
  it("should be able to list its inventory", function(){
    var myRecordStore = new RecordStore("Scratched Records", "Edinburgh");
    var record60s = new Record("The Doors", "Waiting For The Sun", 12);
    var record70s = new Record("David Bowie", "The Rise and Fall of Ziggy Stardust", 10);
    var record80s = new Record("Pixies", "Surfer Rosa", 8);
    var record90s = new Record("Beck", "Odelay", 9);
    var record00s = new Record("Sufjan Stevens", "Illinois", 8);
    var record10s = new Record("Disclosure", "Settle", 8);
    myRecordStore.inventory = [record60s, record70s, record80s, record90s, record00s, record10s];
    myRecordStore.listInventory();
  });

  // Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
  it("should be able to sell a record and adjust cash balance", function(){
    var myRecordStore = new RecordStore("Scratched Records", "Edinburgh");
    var record60s = new Record("The Doors", "Waiting For The Sun", 12);
    var record70s = new Record("David Bowie", "The Rise and Fall of Ziggy Stardust", 10);
    var record80s = new Record("Pixies", "Surfer Rosa", 8);
    var record90s = new Record("Beck", "Odelay", 9);
    var record00s = new Record("Sufjan Stevens", "Illinois", 8);
    var record10s = new Record("Disclosure", "Settle", 8);
    myRecordStore.inventory = [record60s, record70s, record80s, record90s, record00s, record10s];
    myRecordStore.balance = 2000;
    myRecordStore.sellRecord(record70s);
    assert.deepEqual(myRecordStore.inventory, [record60s, record80s, record90s, record00s, record10s]);
    assert.equal(myRecordStore.balance, 1990);
  });
})

