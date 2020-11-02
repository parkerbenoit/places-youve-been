let fruits = ["apple", "pear", "orange", "grapes", "orange"];
                0         1        2        3         4

fruits.forEach(function(element) {
  if(element === "orange") {
    console.log(element);
  }
});

for(let i = 0; i < fruits.length; i++) {
  if(fruits[i] === "orange") {
    fruits[i] = "tangerine";
  } else if(fruits[i] === "apple") {
    fruits[i] = "apple sauce";
  } else if (fruits[i] === "grapes") {
    fruits[i] = "raisins";
  } else {
    console.log("Not a fruit");
  }
}

5 == "5" // true
5 === "5" // false