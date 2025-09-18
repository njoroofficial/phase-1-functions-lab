// filepath: /home/moses/development/code/phase-1/phase-1-functions-lab/index.js
// Code your solution in this file!

function distanceFromHqInBlocks(pickLocation) {
    if (pickLocation < 42) {
        return 42 - pickLocation;
    } else {
        return pickLocation - 42;
    }
}

function distanceFromHqInFeet(pickupLocation) {
    let blockDistance = distanceFromHqInBlocks(pickupLocation);
    return blockDistance * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let travelledFeet = distanceTravelledInFeet(start, destination);

    if (travelledFeet <= 400) {
        return 0;
    } else if (travelledFeet > 400 && travelledFeet <= 2000) {
        let totalFoot = travelledFeet - 400;
        let totalFare = totalFoot * 0.02;
        return totalFare;
    } else if (travelledFeet > 2000 && travelledFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}