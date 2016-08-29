/*
Where each element in minAgeForRating is the minimum age to see the
corresponding ratings. That is; 'G' has a minimum age of 0, 'PG' has
a minimum age of 9, etc.


Challenge

List out the ratings that each age in the ages is allowed to watch.

For example, an age of 14 would be allowed to see 'G', 'PG',
and 'M' because 14 is older than 0, 9, and 12 respectively.

An example of the final output could be:

Age 1 is allowed to see: G
Age 23 is allowed to see: G,PG,M,MA
Age 8 is allowed to see: G
Age 12 is allowed to see: G,PG,M
Age 16 is allowed to see: G,PG,M,MA
Or, even;

G
1, 23, 8, 12, 16
PG
23, 12, 16
M
23, 12, 16
MA
23, 16
*/

var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

ages.forEach(function (age, i) {
  var canWatch = [];
  minAgeForRating.forEach(function(min, j) {
    if (age >= min) {
    canWatch.push(ratings[j])
    }
  })
  var response = "A " + age + " year old person can watch movies rated: " + canWatch;
  console.log(response);
});
