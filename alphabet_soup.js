function replaceAt(str, i, char) {
    return str.substr(0, i) + char + str.substr(i + 1)
}

function swap(str, i1, i2) {
    return replaceAt(replaceAt(str, i1, str[i2]), i2, str[i1]);
}

function AlphabetSoup(str) {
    var sorted = str;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length - 1; j++) {
            if (str[i] < str[j]) {
                str = swap(str, i, j)
            }
        }
    }
    return str;
}
// Thanking @rajuGT from Stackoverflow
// http://stackoverflow.com/questions/33266885/sort-string-without-any-builtin-methods

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());
