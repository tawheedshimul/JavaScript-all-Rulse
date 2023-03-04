// when we play ludu how do we pring 1 to 6 randomly 


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(1, 6));


// the year is leap year

function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
        console.log(`${year} is a leap year `);
    }
    else {
        console.log(`${year} is not a leap year `);
    }
}

isLeapYear(2028);
isLeapYear(2020);
isLeapYear(2026);

// find a random number 


function random(ran, ban){
    return Math.floor(Math.random()*10);
}

console.log(random(2,10));


