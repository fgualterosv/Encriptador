function encryptText() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = inputText.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
    document.getElementById('encrypted-text').innerText = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById('encrypted-text').innerText;
    const decryptedText = encryptedText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
    document.getElementById('input-text').value = decryptedText;
}

function copyText() {
    const encryptedText = document.getElementById('encrypted-text').innerText;
    navigator.clipboard.writeText(encryptedText).then(() => {
        alert('Texto copiado al portapapeles');
    });
}
