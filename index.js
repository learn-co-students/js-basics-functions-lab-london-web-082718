// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  if (number > 42) {
    return number - 42;
  } else {
    return 42 - number;
  }
}


function distanceFromHqInFeet(number) {
  return feet = distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet(one, two) {
  if (two > one) {
    return (two - one) * 264
  } else {
    return (one - two) * 264;
  }
}


function calculatesFarePrice(start, finish) {
  let distance = distanceTravelledInFeet(start, finish)

  let cost

  if (distance <= 400) {
    cost = 0
  } else if (distance > 400  && distance <= 2000 ) {
    cost = (distance - 400) * 0.02
  } else if (distance > 2000 && distance <= 2500) {
    cost = 25
  } else {
    cost = 'cannot travel that far'
  }

  return cost;

}
