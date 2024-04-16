#! /usr/bin/env node

//Task # 40
// Album: write a function called make_album() thats builds a object describing a music album. the function should take in an 
// artist.
// Name and an album title, and it should return a object containing these two pieces of information. Use the function to make.
// These dictioneries representing different album. Print each return value to show that object are storing the album.
// Information correctly. Add an optional parameter to make_album() that allows you to store the number of tricks on an album. 
// If the calling line includes a value for the number of tracks, add that value to that album's object. Make atleast one new
// Function call that includes the number of tracks on an album. 



function  makeAlbum(artist: string, title: string): {artist: string, title: string}  {
const dictionaries = {
    artist : artist.charAt(0).toUpperCase() + artist.slice(1),
     title : title.charAt(0).toUpperCase() + title.slice(1) 
};
return dictionaries;
}
let album = makeAlbum('Ali', 'light')
console.log(album)
album = makeAlbum('Bilal', 'red wave')
console.log(album)
album = makeAlbum('Hamza', 'seen breeze')
console.log(album)

