const wordsArray = ["I", "ENJOY", "CODING", "AND", "WRITING", "CODE", "IS", "A", "LOT", "OF", "FUN"];

const firstCharactersString = wordsArray.reduce((result, word) => result + word[0], "");

console.log(firstCharactersString);
