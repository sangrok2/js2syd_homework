/*
Assignment 2: Random Address Generator

Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506

*/

var streetNumbers = [10, 39, 92, 109, 892, 799, 793];
var streetNames = ['Spring st', 'Grafton st', 'Miller ave', 'York st', 'King st'];
var cityNames = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Canberra', 'Adelaide'];
var stateNames = ['NSW', 'VIC', 'QLD', 'WA', 'ACT', 'SA'];
var zipCodes = [2000, 2300, 2200, 2010, 2111, 2222, 2998];

console.log(streetNumbers[ Math.floor(Math.random()*(streetNumbers.length-1)) + 1] + " " + streetNames[ Math.floor(Math.random()*(streetNames.length-1)) + 1] + " " + cityNames[ Math.floor(Math.random()*(cityNames.length-1)) + 1] + " " + stateNames[ Math.floor(Math.random()*(stateNames.length-1)) + 1] + " " + zipCodes[ Math.floor(Math.random()*(zipCodes.length-1)) + 1])
