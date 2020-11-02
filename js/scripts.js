// Business Logic for TravelBook --------
function TravelBook() {
  this.destinations = [];
  this.currentId = 0;
}

TravelBook.prototype.addDestination = function (destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

TravelBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}



// Business Logic for Destination ---------
function Destination(city, country, bestTimeForTravel, famousLandmark, knownFor) {
  this.city = city;
  this.country = country;
  this.bestTimeForTravel = bestTimeForTravel;
  this.famousLandmark = famousLandmark;
  this.knownFor = knownFor;
}

    // let travelBook = new TravelBook();
    let seattle = new Destination("Seattle", "USofA", "Summer", "Space Needle", "Rain");
    let boston = new Destination("Boston", "USofA", "Fall", "Museum of Fine Arts", "Baked Beans");
    let paris = new Destination("Paris", "France", "Spring", "Louvre", "Baguettes");
    let london = new Destination("London", "England", "Summer", "St. Paul's Cathedral", "Bangers and Mash");

Destination.prototype.display = function (location) {
  location.forEach(function(element) {
    console.log(element);
  })
}


// let printObject = function(obj) {
//   if (this.destionations[i])
// }




//User Interface Logic
let travelBook = new TravelBook();

function displayDestinationDetails(travelBookToDisplay) {
  let destination = $("ul#destination");
  let htmlForDestination = "";
  travelBookToDisplay.destination.forEach(function(destination) {
    htmlForDestination += ""
  }
})

$(document).ready(function() {
  $("form#display").submit(function(event))
  event.preventDefault();
})

// $(document).ready(function() {
//   $(".clickable").click(function(event) {
//     event.preventDefault();
    
    
//     $("#seattle").text(seattle.city)



  

  });
});


