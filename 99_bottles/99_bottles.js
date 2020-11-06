// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

var bottles = 99;

const printChant = (bottles) => {
    if (bottles > 2) {
        const quotePlural = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`
        console.log(quotePlural)
    } else if (bottles === 2) {
        const quoteTwo = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottle of beer on the wall.`
        console.log(quoteTwo);
    } else if (bottles === 1) {
        const quoteOne = `${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`
        console.log(quoteOne);
    } else {
        const quoteNone = `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${bottles} bottles of beer on the wall.`
        console.log(quoteNone);
        bottles = 99
        return
    }
    bottles = bottles - 1
    printChant(bottles)
}

printChant(bottles);