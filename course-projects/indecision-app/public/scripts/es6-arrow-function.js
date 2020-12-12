'use strict';

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getFirstNameShort = function getFirstNameShort(fullName) {
    return fullName.split(' ')[0];
};

var fullName = "Alvi Mahadi";

console.log(getFirstName(fullName));
console.log(getFirstNameShort(fullName));
