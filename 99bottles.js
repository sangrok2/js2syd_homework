/*
Assignment 1: 99 Bottles of Beer

Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
If you're unfamiliar with the song, you can find the lyrics here.
Make sure your program can handle both singular and plural cases
(i.e. both "100 bottles of beer" and "1 bottle of beer").
*/

/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

var beerNum = 99;
var bottleTxt = "bottles";
var lyrics = [ " of beer on the wall", " of beer.", "Take one down and pass it around, ", " no more bottles of beer on the wall" ]
for (var beerNum = 99; beerNum >= 0; beerNum--) {
  if (beerNum >= 2) {
    console.log(beerNum + " " + bottleTxt + lyrics[0]+ ", " + beerNum + " " + bottleTxt + lyrics[1]);
    console.log(lyrics[2] + --beerNum + " " + bottleTxt + lyrics[0] + ".");
    beerNum++    
  } else if (beerNum == 1) {
    bottleTxt = "bottle";
    console.log(beerNum + " " + bottleTxt + lyrics[0]+ ", " + beerNum + " " + bottleTxt + lyrics[1]);
    console.log(lyrics[2] + lyrics[3] + ".");
  } else {
    bottleTxt = "bottles";
    console.log("No more bottles of beer on the wall, no more " + bottleTxt + lyrics[1]);
    console.log("Go to the store and buy some more, 99 " + bottleTxt + lyrics[0] + ".");
}
}
