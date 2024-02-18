let a = "Hello this is text number 1"
let b = "Hello again ! this is the longest word of the text"

// function longest(string) {
//     //split string to words
//     //split words to chars
//     //count chars

//     let words = string.split(" ");
//     let chars = [];
//     console.log("words:  " + words);
//     for(let i =0; i<words.length; i++) {
//         chars[i] = words[i].split("").length
//     }
//     console.log("chars: " + chars);
//     let longestWord = Math.max(...chars)
//     // console.log("longest :"+longestWord);
//     // console.log("the longest word from this array is: "+words[chars.indexOf(longestWord)] + " with: " + longestWord +" characters ")
//     return words[chars.indexOf(longestWord)]
// }
// console.log(longest(a));


function longestMap(string) {
    let words = string.split(" ")
    let charsInWords = words.map(word => word.length)
    console.log(charsInWords);
    console.log(words);
    let highestNumber = Math.max(...charsInWords)
    return words[charsInWords.indexOf(highestNumber)]
}
console.log(longestMap(a))