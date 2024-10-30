// Seleciona o elemento canbas e define o contexto 2D
const canvas = document.getElementById('vgaCanvas');
const ctx = canvas.getContext('2d');

// Tamanho do VGA em pixels para 16 cores
const WIDTH = 640;
const HEIGHT = 480;

// Paleta típica do VGA para 16 cores do VGA (em hexadecimal)
const colors = [
    '#000000', '#0000AA', '#00AA00', '#AAAA00', '#AA0000',
    '#AA00AA', '#AA5500', '#00AAAA', '#555555', '#5555FF',
    '#55FF55', '#55FFFF', '#FF5555', '#FF55FF', '#FFFF55',
    '#FFFFFF'
];
// Array de imageData gerado da imagem fornecida (exemplo)
// Este array conterá 480 linhas, cada uma com 640 pixels (valores de 0 a 15)
function generatedImageData() {
    return new Array(HEIGHT).fill().map(() =>
        new Array(WIDTH).fill().map(() => Math.floor(Math.random() * 16))
)
}

// Funçao para desenhar a imagem no canvas usando os dados do array
function drawImagePattern(imageData) {
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            const colorIndex = imageData[y][x];
            ctx.fillStyle = colors[colorIndex];
            ctx.fillRect(x, y, 1, 1); // Desenha um pixel de 1x1
        }
    }
}

function animate() {
    const imageData = generatedImageData();
    drawImagePattern(imageData);
    requestAnimationFrame(animate);
}
animate();
