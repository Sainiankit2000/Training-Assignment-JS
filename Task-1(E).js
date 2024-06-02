const wordsArray = ["i", "enjoy", "coding", "and", "writing", "code", "is", "a", "lot", "of", "fun"];

const count = wordsArray.reduce((accumulator, word) => {
    if (word.includes('a') || word.includes('e')) {
        return accumulator + 1;
    }
    return accumulator;
}, 0);

console.log(count);
