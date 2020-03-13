var alphabet = "abcdefghijklmnopqrstuvwxyz";
function decrypt(input, key) {
    let cipherText = input.toLowerCase()
    let plainText = ""
    for (let i = 0; i < cipherText.length; i++) {
        let character = cipherText.charAt(i)
        let index = alphabet.indexOf(character)
        let cipherIndex = index - key

        if (index != -1) {
            if (cipherIndex < 0) cipherIndex = cipherIndex + 26
            plainText += alphabet.charAt(cipherIndex)
        } else {
            if (plainText == " ") plainText += " "
            else plainText += character
        }
    }
    return plainText
}
console.log(decrypt('rhyaprh zpshshop', 7))

