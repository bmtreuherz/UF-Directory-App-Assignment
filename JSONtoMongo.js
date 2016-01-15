'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

// Read in the json file
var listings;
fs.readFile('listings.json', 'utf8', function (err, data) {
  if (err)  throw err;

  listings = JSON.parse(data);

  // Loop through the listings and save each to the db
  listings.entries.forEach(function(lst){
    var newListing = Listing(lst);

    newListing.save(function(err){
      if (err) throw err;

      console.log("Listing Created.");
    })
  })
});
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
