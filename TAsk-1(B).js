const txt1 = "i enjoy coding and writing code is a lot of fun";
const wordsArray = txt1.split(" ");

const uppercaseArray = wordsArray.map(word => word.toUpperCase());

console.log(uppercaseArray);