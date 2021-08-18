function LetterOccurrence(GivenString, letter) {
    let input = String(GivenString);
    let letterstring = String(letter);
    let inputLowerCase = input.toLowerCase()
    let characterArray = Array.from(inputLowerCase);

    let count = 0;
    for (c in characterArray) {
        if (characterArray[c] == letterstring) { count++ };
    }
    console.log(count);
}

LetterOccurrence("Hello world", "l")