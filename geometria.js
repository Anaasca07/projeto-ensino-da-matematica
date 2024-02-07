const geometryWindow = document.createElement('div');
geometryWindow.style.display = 'grid';
geometryWindow.style.gridTemplateColumns = '1fr 2fr';
geometryWindow.style.gridTemplateRows = '1fr 1fr 1fr';
geometryWindow.style.gap = '10px';
geometryWindow.style.padding = '10px';

const widthLabel = document.createElement('label');
widthLabel.textContent = 'Largura:';
geometryWindow.appendChild(widthLabel);

const widthField = document.createElement('input');
widthField.type = 'number';
widthField.value = '3';
geometryWindow.appendChild(widthField);

const heightLabel = document.createElement('label');
heightLabel.textContent = 'Altura:';
geometryWindow.appendChild(heightLabel);

const heightField = document.createElement('input');
heightField.type = 'number';
heightField.value = '4';
geometryWindow.appendChild(heightField);

const areaLabel = document.createElement('label');
areaLabel.textContent = 'Área do Retângulo:';
geometryWindow.appendChild(areaLabel);

const resultLabel = document.createElement('span');
geometryWindow.appendChild(resultLabel);

const calculateButton = document.createElement('button');
calculateButton.textContent = 'Calcular';
geometryWindow.appendChild(calculateButton);

calculateButton.addEventListener('click', () => {
    try {
        const width = parseFloat(widthField.value);
        const height = parseFloat(heightField.value);
        const area = width * height;
        resultLabel.textContent = `Área: ${area}`;
    } catch (ex) {
        resultLabel.textContent = 'Erro: Por favor, insira valores numéricos válidos.';
    }
});

document.body.appendChild(geometryWindow);
