function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  const colorPalette = document.getElementById('colorPalette');
  colorPalette.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    const color = generateRandomColor();
    colorBox.style.backgroundColor = color;

    const colorCodeElement = document.createElement('div');
    colorCodeElement.classList.add('color-code');
    colorCodeElement.textContent = color;
    colorBox.appendChild(colorCodeElement);

    colorBox.addEventListener('click', function() {
      copyToClipboard(color);
     // alert('Copied to clipboard');
    });

    colorPalette.appendChild(colorBox);
  }
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    generatePalette();
  }
});
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
// generate the first palette
generatePalette();
