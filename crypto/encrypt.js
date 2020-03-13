function encrypt(cipherText, key) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var result = ''
    for (i = 0; i < cipherText.length; i++) {
        let letter = cipherText[i].toLowerCase();
        let index = alphabet.indexOf(letter);

        if (index != -1) {
            index += key
            if (index < alphabet.length) result += alphabet[index]
            else {
                index -= alphabet.length
                result += alphabet[index]
            }
        } else result += ' '
    }
    return result
}

