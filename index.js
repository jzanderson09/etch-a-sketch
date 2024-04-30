'use strict';

//Style Terms:
const BANNER_FONT_COLOR = 'rgb(99% 86% 36%)';
const BANNER_FONT_FAMILY = `'Jersey 25', sans-serif`;
const BANNER_FONT_SIZE = '4.8rem';
const BANNER_FONT_STYLE = 'italic';
const BANNER_TEXT_SHADOW = '1px 1px 1px rgb(0 0 0)';
const BORDER_SIZE = '3px inset rgb(0 0 0)';
const DRAW_COLOR = 'rgb(100 100 100 / 25%)';
const KNOB_BG_COLOR = 'whitesmoke';
const KNOB_BORDER_RADIUS = '100%';
const KNOB_BORDER_SIZE = '8px inset rgb(225 225 225 / 80%)';
const KNOB_MARGIN = '1%';
const KNOB_REDUCED_SIZE = '8rem';
const KNOB_SIZE = '13rem';
const ORIGINAL_RAINBOW_BUTTON = 'rgb(0 0 0 / 80%)';

let rainbowMode = 'false';

const container = document.querySelector('#container');
container.style.backgroundColor = 'rgb(230 0 0)';
container.style.border = BORDER_SIZE;
container.style.borderRadius = '1%';
container.style.boxShadow = '1px 1px 1px 1px rgb(0 0 0)';
container.style.display = 'flex';
container.style.flexFlow = 'column nowrap';
container.style.height = '98vh';
container.style.width = '100%';

const bannerDiv = document.createElement('div');
bannerDiv.id = 'banner';
bannerDiv.style.alignItems = 'center';
bannerDiv.style.display = 'flex';
bannerDiv.style.flex = '1 1 auto';
bannerDiv.style.justifyContent = 'space-evenly';
bannerDiv.style.margin = 'auto';
bannerDiv.style.width = '80%';

const magicText = document.createElement('h3');
magicText.style.background = 'linear-gradient(to bottom right, rgb(255, 215, 14) 0%, rgb(255 255 255 / 90%) 100%)';
magicText.style.fontFamily = BANNER_FONT_FAMILY;
magicText.style.fontSize = BANNER_FONT_SIZE;
magicText.style.fontStyle = BANNER_FONT_STYLE;
magicText.style.fontWeight = '400';
magicText.textContent = 'MAGIC';
magicText.style.textShadow = BANNER_TEXT_SHADOW;
magicText.style.webkitBackgroundClip = 'text';
magicText.style.webkitTextFillColor = 'transparent';

const etchBanner = document.createElement('h1');
etchBanner.textContent = 'Odin-Etch';
etchBanner.style.color = BANNER_FONT_COLOR;
etchBanner.style.fontFamily = `'Arizonia', cursive`;
etchBanner.style.fontSize = '7.2rem';
etchBanner.style.fontStyle = 'normal';
etchBanner.style.margin = '1%';
etchBanner.style.padding = '0';
etchBanner.style.textShadow = BANNER_TEXT_SHADOW;

const screenText = document.createElement('h3');
screenText.textContent = 'SCREEN';
screenText.style.background = '#FFD70E';
screenText.style.background = 'linear-gradient(to bottom right, rgb(255, 215, 14) 0%, rgb(255 255 255 / 90%) 100%)';
screenText.style.webkitBackgroundClip = 'text';
screenText.style.webkitTextFillColor = 'transparent';
screenText.style.fontFamily = BANNER_FONT_FAMILY;
screenText.style.fontSize = BANNER_FONT_SIZE;
screenText.style.fontStyle = BANNER_FONT_STYLE;
screenText.style.fontWeight = '400';
screenText.style.textShadow = BANNER_TEXT_SHADOW;
screenText.webkitBackgroundClip = 'text';
screenText.webkitTextFillColor = 'transparent';

bannerDiv.append(magicText, etchBanner, screenText);

let divQty = 16 * 16;
let gridContainer = generateDivGrid(divQty);
styleGrid(gridContainer);

const rainbowGridsButton = document.createElement('button');
rainbowGridsButton.addEventListener('click', toggleRainbowMode);
rainbowGridsButton.id = 'rainbow-button';
rainbowGridsButton.style.alignSelf = 'center';
rainbowGridsButton.style.backgroundColor = ORIGINAL_RAINBOW_BUTTON;
rainbowGridsButton.style.border = '3px outset whitesmoke';
rainbowGridsButton.style.borderRadius = '100%';
rainbowGridsButton.style.color = 'whitesmoke';
rainbowGridsButton.style.height = '8vh';
rainbowGridsButton.style.width = '15%';
rainbowGridsButton.textContent = 'Rainbow Mode';

const knobsDiv = document.createElement('div');
knobsDiv.id = 'knobs-div';
knobsDiv.style.alignItems = 'center';
knobsDiv.style.display = 'flex';
knobsDiv.style.justifyContent = 'space-between';
knobsDiv.style.padding = '1% auto';

const leftKnob = document.createElement('div');
const rightKnob = document.createElement('div');
leftKnob.className = 'knobs';
rightKnob.className = 'knobs';

let knobArr = [leftKnob, rightKnob];

knobArr.forEach(knob => {
    knob.style.backgroundColor = KNOB_BG_COLOR;
    knob.style.border = KNOB_BORDER_SIZE;
    knob.style.borderRadius = KNOB_BORDER_RADIUS;
    knob.style.margin = KNOB_MARGIN;
    if (divQty <= 32) {
        knob.style.height = KNOB_SIZE;
        knob.style.width = KNOB_SIZE;
    }
    else if (divQty === 16) {
        knob.style.height = KNOB_SIZE;
        knob.style.width = KNOB_SIZE;
    }
    else {
        knob.style.height = KNOB_REDUCED_SIZE;
        knob.style.width = KNOB_REDUCED_SIZE;
    }
});

const sixteenButton = document.createElement('button');
const thirtyTwoButton = document.createElement('button');
const sixtyFourButton = document.createElement('button');

sixteenButton.textContent = '16 x 16';
thirtyTwoButton.textContent = '32 x 32';
sixtyFourButton.textContent = '64 x 64';

sixteenButton.addEventListener('click', clickHandler);
thirtyTwoButton.addEventListener('click', clickHandler);
sixtyFourButton.addEventListener('click', clickHandler);

let buttonArr = [sixteenButton, thirtyTwoButton, sixtyFourButton];
buttonArr.forEach(button => {
    button.className = 'options';
    button.style.border = BORDER_SIZE;
    button.style.borderRadius = '10%';
    button.style.boxShadow = '3px 3px 3px 3px rgb(0 0 0)';
    button.style.fontSize = '1.6rem';
    button.style.height = '10vh';
    button.style.width = '20rem';
});

const buttonDiv = document.createElement('div');
buttonDiv.id = 'button-div';
buttonDiv.style.alignItems = 'center';
buttonDiv.style.display = 'flex';
buttonDiv.style.gap = '5%';

buttonDiv.append(sixteenButton, thirtyTwoButton, sixtyFourButton);
knobsDiv.append(leftKnob, buttonDiv, rightKnob);
container.append(bannerDiv, gridContainer, rainbowGridsButton, knobsDiv);

/*-------------------------------------------------------*/

function clickHandler(e) {
    new Audio('./click.mp3').play();
    const cancelChange = `Good choice, it's a masterpiece! ^_^`;
    const confirmChange = 'Are you sure? Everything etched will be lost.';
    
    switch(e.target.textContent) {
        case '64 x 64':
            console.log('Size 64 x 64 clicked!');
            confirm(confirmChange) ? resetGrid(64 * 64) : alert(cancelChange);
            break;
            case '32 x 32':
                console.log('Size 32 x 32 clicked!');
                confirm(confirmChange) ? resetGrid(32 * 32) : alert(cancelChange);
            break;
        default:
            console.log('Size 16 x 16 clicked!');
            confirm(confirmChange) ? resetGrid(16 * 16) : alert(cancelChange);
    }
}

function drawOnGrid(e) {
    if (rainbowMode === true) {
        e.target.style.backgroundColor = getRandomColor();
    } else {
        e.target.style.backgroundColor = DRAW_COLOR;
    }
}

function generateDivGrid(qty) {
    let divContainer = document.createElement('div');
    divContainer.className = 'grid-container';
    divContainer.style.alignItems = 'center';
    divContainer.style.border = BORDER_SIZE;
    divContainer.style.borderRadius = '1%';
    divContainer.style.display = 'flex';
    divContainer.style.flexFlow = 'row wrap';
    divContainer.style.justifyContent = 'center';
    divContainer.style.margin = '5% auto 2%';
    divContainer.style.height = '90%';
    divContainer.style.width = '80%';
    
    let divTemplate = document.createElement('div');
    divTemplate.style.backgroundColor = 'rgb(200 200 200 / 80%)';
    divTemplate.id = 'div-template';
    divTemplate.style.flex = '1 1 auto';
    
    for (let i = 0; i < qty; i++) {
        let tempDiv = divTemplate.cloneNode();
        tempDiv.className = 'grid-div';
        tempDiv.id = Math.trunc(Math.random() * 100000);
        //16*16:
        if (qty <= 256) {
            tempDiv.style.border = '5px solid rgb(0 0 0 / 15%)';
            tempDiv.style.height = '6.2%';
            tempDiv.style.width = '6%';
        } 
        //32*32:
        else if (qty > 256 && qty <= 1024) {
            tempDiv.style.border = '2px solid rgb(0 0 0 / 15%)';
            tempDiv.style.height = '3.13%';
            tempDiv.style.width = '3.1%';
        } 
        //64*64:
        else {
            tempDiv.style.border = '1.45px solid rgb(0 0 0 / 25%)';
            tempDiv.style.height = '1.14%';
            tempDiv.style.width = '1.55%';
        }
        
        tempDiv.addEventListener('mouseover', drawOnGrid);
        divContainer.appendChild(tempDiv);
    }
    return divContainer;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    let i = 0;
    do {
        color += letters[Math.floor(Math.random() * 16)];
        i++;
    } while (i < 6);
    color = hexToRgb(color);
    return color;
}

function hexToRgb(hexNum) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexNum);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    let randomOpacity = Math.floor(Math.random() * 100);
    return `rgb(${r} ${g} ${b} / ${randomOpacity}%)`;
}

function resetGrid(gridSize) {
    let newGrid = generateDivGrid(gridSize);
    styleGrid(newGrid);
    let oldGrid = document.querySelector('.grid-container');
    container.replaceChild(newGrid, oldGrid);
}

function styleGrid(grid) {
    grid.className = 'grid-container';
    grid.style.alignItems = 'center';
    grid.style.backgroundColor = 'rgb(150 150 150)';
    grid.style.border = BORDER_SIZE;
    grid.style.borderRadius = '1%';
    grid.style.display = 'flex';
    grid.style.flexFlow = 'row wrap';
    grid.style.justifyContent = 'center';
    grid.style.margin = '0 auto 2%';
    grid.style.height = '80%';
    grid.style.width = '80%';
}

function toggleRainbowMode() {
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        rainbowGridsButton.style.backgroundColor = getRandomColor();
    } else {
        rainbowGridsButton.style.backgroundColor = ORIGINAL_RAINBOW_BUTTON;
    }
}