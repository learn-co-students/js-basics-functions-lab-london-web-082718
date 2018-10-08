// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
      } else {
        return 42 - blockNumber;
      }

}

function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264 
} 

function distanceTravelledInFeet(start,  finish ) {
    let distance = (start - finish) * 264; 
    return Math.abs(distance);
}

function calculatesFarePrice(start, finish) {
    const distance = distanceTravelledInFeet(start, finish);

    if (distance > 2500) {
        return 'cannot travel that far'
    } else if (distance  <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400)
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    }
}