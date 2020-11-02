// Business Logic for TravelBook --------
function TravelBook() {
  this.destinations = [];
}

TravelBook.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}





// Business Logic for Destination ---------
function Destination(city, country, bestTimeForTravel, famousLandmark, knownFor) {
  this.city = city;
  this.country = country;
  this.bestTimeForTravel = bestTimeForTravel;
  this.famousLandmark = famousLandmark;
  this.knownFor = knownFor;
}

Destination // hi //



//User Interface Logic

let destination = new Destination();


