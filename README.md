### Specs

Describe: Destination()

<!-- Test: "This will create an object for each of the destinations that we enter"
Expect(Destination(city)).toEqual("Seattle"); -->

Test: "This will add details about specific destionation to relating object"
Expect(Destionation({"city", "country", "bestTimeForTravel", "famousLandmark", "knownFor"}).toEqual({city: "Seattle", country: "USA", bestTimeForTravel: "summer", famousLankdmark: "Space Needle", knownFor: "rain"})