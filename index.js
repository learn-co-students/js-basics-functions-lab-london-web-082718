// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(42 - someValue)
}

function distanceFromHqInFeet (someValue) {
  return (distanceFromHqInBlocks(someValue)* 264);
}

function distanceTravelledInFeet(uptown, downtown) {
  blocks = Math.abs(uptown - downtown)
  return blocks*264
}

function calculatesFarePrice (uptown, downtown) {
  var distance = distanceTravelledInFeet(uptown, downtown)
  let farePrice
  if (distance < 400) {
    farePrice = 0
  } else if (distance >= 400 && distance <= 2000){
    farePrice = (distance-400) * 0.02
  } else if (distance > 2000 && distance <= 2500){
    farePrice = 25
  } else {
    farePrice = "cannot travel that far"
  }
  return farePrice
}
