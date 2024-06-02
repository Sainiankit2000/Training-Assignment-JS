const wordsArray = ["i", "enjoy", "coding", "and", "writing", "code", "is", "a", "lot", "of", "fun"];
const jsonArray = wordsArray.map(word => {

    const wordLength = word.length;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            vowelCount++;
        }
    }
    return {
        myWord: word,
        wordLength: wordLength,
        vowelCount: vowelCount
    };
});
console.log(jsonArray);
