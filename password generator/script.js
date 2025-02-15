const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChars = "0123456789";
const symbolChars = "!-$^+";
const spaceChars = " ";

function getRandomChars(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

function generatePassword() {
    const passwordInput = document.getElementById("Password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolCheckbox = document.getElementById("symbols");
    const spaceCheckbox = document.getElementById("spaces");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");

    let characters = "";
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numbersCheckbox.checked) characters += numbersChars;
    if (symbolCheckbox.checked) characters += symbolChars;
    if (spaceCheckbox.checked) characters += spaceChars;

    if (characters === "") {
        passwordInput.value = "";
        return;
    }

    let password = "";
    const length = 12;

    while (password.length < length) {
        const randomChar = getRandomChars(characters);
        if (excludeDuplicateCheckbox.checked && password.includes(randomChar)) continue;
        
        password += randomChar; // Fix: Append randomChar instead of undefined chars
    }

    passwordInput.value = password;
}

function copypassword() {
    const passwordInput = document.getElementById("Password");
    const copyButton = document.getElementById("copy");

    navigator.clipboard.writeText(passwordInput.value).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
