/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to the database */
mongoose.connect(config.db.uri);

// Providing a way to check that all the callbacks have completed.
var operationsRequired = 4;
var operationsCompleted = 0;

var closeConnection = function(){
  if (operationsCompleted == operationsRequired)
    mongoose.disconnect();
}

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({name: 'Library West'}, function(err, listing){
     if (err) throw err;

     // output the found listing
     console.log('Library West:\n')
     console.log(listing + '\n');

     operationsCompleted++;
     closeConnection();
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOne({code: 'CABL'}, function(err, listing){
     if (err) throw err;

     if(listing){
       // Log the document to the console.l
       console.log('Cable Document:\n')
       console.log(listing + '\n');

       // Remove the listing.
       listing.remove(function(err){
         if(err) throw err;

         console.log("Listing successfully deleted." + '\n');
         operationsCompleted++;
         closeConnection();
       });
     }else{
       console.log('The CABL document does not exist\n');
       operationsCompleted++;
       closeConnection();
     }

   })
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
  Listing.findOneAndUpdate({code: 'PHL'}, {address: '100 Phelps Lab P.O. Box 116350 Gainesville, FL  32611'}, { 'new': true }, function(err, listing){
    if(err) throw err;

    console.log('Update Phelps address\n');
    console.log(listing + '\n');

    operationsCompleted++;
    closeConnection();
  });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listing){
     if (err) throw err;

     // Display the listings in the console.
     console.log("All listings\n");
     console.log(listing + '\n');

     operationsCompleted++;
     closeConnection();
   })
};

// Note the console logging may appear out of order as callbacks come in.
findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
