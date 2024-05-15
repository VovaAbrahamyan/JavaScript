// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birethYear => 2037 - birethYear;

console.log(calcAge(1991));
*//*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps [0];
  let min = temps [0];

  for (let i=0; i < temps.length; i++) {
    const curTemp = temps[i];

  if (typeof curTemp !== 'number') continue;

  if (curTemp > max) max = curTemp;
  if (curTemp < min) min = curTemp;
}
console.log(max ,min);
return max - min;
}

calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
for (let i = 0; i < arr.length; i++) {
str += `${arr[i]}ºC in ${i +1} days ... `;
};
console.log(' ... ' + str);
};

printForecast(data2)