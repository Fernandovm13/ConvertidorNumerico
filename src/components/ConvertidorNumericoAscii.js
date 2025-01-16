const numericInput = document.getElementById('numericInput');
const numericResult = document.getElementById('numericResult');
const asciiInput = document.getElementById('asciiInput');
const asciiResult = document.getElementById('asciiResult');

window.convertNumber = function (type) {
    const num = parseInt(numericInput.value);
    if (isNaN(num)) {
        numericResult.textContent = 'Por favor, ingrese un número válido';
        return;
    }

    switch (type) {
        case 'binario':
            numericResult.textContent = ` ${num.toString(2)}`;
            break;
        case 'hexadecimal':
            numericResult.textContent = ` ${num.toString(16).toUpperCase()}`;
            break;
        case 'decimal':
            numericResult.textContent = ` ${num}`;
            break;
        case 'octal':
            numericResult.textContent = ` ${num.toString(8)}`;
            break;
        default:
            numericResult.textContent = 'Conversión no válida';
    }
};

function convertToAscii(text) {
    if (!text) {
        asciiResult.textContent = 'Por favor, ingrese texto válido';
        return;
    }
    return text
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
}

document.getElementById('convertAsciiBtn').addEventListener('click', function () {
    const inputText = asciiInput.value;
    const asciiOutput = convertToAscii(inputText);
    asciiResult.textContent = asciiOutput || 'Error en la conversión';
});
