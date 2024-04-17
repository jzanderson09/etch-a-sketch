'use strict';

//Style Terms:
const KNOB_BG_COLOR = 'whitesmoke';
const KNOB_BORDER_RADIUS = '100%';
const BORDER_SIZE = '3px inset rgb(0 0 0)';
const KNOB_BORDER_SIZE = '8px inset rgb(225 225 225 / 80%)';
const KNOB_MARGIN = '1%';
const KNOB_BIG_SIZE = '13rem';
const KNOB_REDUCED_SIZE = '8rem';
const KNOB_SIZE = '13rem';

const BANNER_FONT_COLOR = 'rgb(99% 86% 36%)';
const BANNER_FONT_FAMILY = `'Jersey 25', sans-serif`;
const BANNER_FONT_SIZE = '4.8rem';
const BANNER_FONT_STYLE = 'italic';
const BANNER_TEXT_SHADOW = '1px 1px 1px rgb(0 0 0)';

const docBody = document.querySelector('body');
docBody.style.backgroundImage = `url('./images/bg.jpg')`;

const container = document.querySelector('#container');
container.style.backgroundColor = 'rgb(255 0 0 / 80%)';
container.style.border = BORDER_SIZE;
container.style.borderRadius = '1%';
container.style.boxShadow = '1px 1px 1px 1px rgb(0 0 0)';
container.style.display = 'flex';
container.style.height = '98vh';
container.style.width = '100%';

const sketchContainer = document.createElement('div');
sketchContainer.id = 'sketch-container';
sketchContainer.style.display = 'flex';
sketchContainer.style.flexFlow = 'column nowrap';
sketchContainer.style.height = '100%';
sketchContainer.style.textAlign = 'center';
sketchContainer.style.width = '100%';

const bannerDiv = document.createElement('div');
bannerDiv.id = 'banner';
bannerDiv.style.alignItems = 'center';
bannerDiv.style.display = 'flex';
bannerDiv.style.flex = '1 1 auto';
bannerDiv.style.justifyContent = 'space-evenly';
bannerDiv.style.margin = 'auto';
bannerDiv.style.width = '80%';

const magicText = document.createElement('h3');
magicText.textContent = 'MAGIC';
magicText.style.background = '#FFD70E';
magicText.style.background = 'linear-gradient(to bottom right, rgb(255, 215, 14) 0%, rgb(255 255 255 / 90%) 100%)';
magicText.style.webkitBackgroundClip = 'text';
magicText.style.webkitTextFillColor = 'transparent';
magicText.style.fontFamily = BANNER_FONT_FAMILY;
magicText.style.fontSize = BANNER_FONT_SIZE;
magicText.style.fontStyle = BANNER_FONT_STYLE;
magicText.style.fontWeight = '400';
magicText.style.textShadow = BANNER_TEXT_SHADOW;

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

const knobsDiv = document.createElement('div');
knobsDiv.id = 'knobs-div';
knobsDiv.style.alignItems = 'center';
knobsDiv.style.display = 'flex';
knobsDiv.style.justifyContent = 'space-between';
knobsDiv.style.padding = '1% auto';

const leftKnob = document.createElement('div');
leftKnob.className = 'knobs';
const rightKnob = document.createElement('div');
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
        knob.style.height = KNOB_BIG_SIZE;
        knob.style.width = KNOB_BIG_SIZE;
    }
    else {
        knob.style.height = KNOB_REDUCED_SIZE;
        knob.style.width = KNOB_REDUCED_SIZE;
    }
});

knobArr = null;

const sixteenButton = document.createElement('button');
const thirtyTwoButton = document.createElement('button');
const sixtyFourButton = document.createElement('button');

sixteenButton.textContent = '16x16';
thirtyTwoButton.textContent = '32x32';
sixtyFourButton.textContent = '64x64';

sixteenButton.addEventListener('click', clickHandler);
thirtyTwoButton.addEventListener('click', clickHandler);
sixtyFourButton.addEventListener('click', clickHandler);

let buttonArr = [sixteenButton, thirtyTwoButton, sixtyFourButton];
buttonArr.forEach(button => {
    button.style.border = BORDER_SIZE;
    button.style.borderRadius = '10%';
    button.style.boxShadow = '3px 3px 3px 3px rgb(0 0 0)';
    button.style.fontSize = '1.6rem';
    button.style.height = '10vh';
    button.style.width = '20rem';
});

const buttonDiv = document.createElement('div');
buttonDiv.style.alignItems = 'center';
buttonDiv.style.display = 'flex';
buttonDiv.style.gap = '5%';

buttonDiv.append(sixteenButton, thirtyTwoButton, sixtyFourButton);

knobsDiv.append(leftKnob, buttonDiv, rightKnob);

sketchContainer.append(bannerDiv, gridContainer, knobsDiv);
container.appendChild(sketchContainer);


/*-------------------------------------------------------*/

function clickHandler(e) {
    new Audio('./click.mp3').play();
    let grid;
    switch(e.target.textContent) {
        case '64x64':
            console.log('64 clicked!');
            grid = generateDivGrid(64 * 64);
            break;
        case '32x32':
            console.log('32 clicked!');
            grid = generateDivGrid(32 * 32);
            break;
        default:
            console.log('16 clicked!');
            grid = generateDivGrid(16 * 16);
            break;
    }
    grid.className = 'grid-container';
    grid.style.alignItems = 'center';
    grid.style.border = BORDER_SIZE;
    grid.style.borderRadius = '1%';
    grid.style.display = 'flex';
    grid.style.flexFlow = 'row wrap';
    grid.style.justifyContent = 'center';
    grid.style.margin = '0 auto 2%';
    grid.style.height = '80%';
    grid.style.width = '80%';
                
    let oldGrid = document.querySelector('.grid-container');  
    sketchContainer.replaceChild(grid, oldGrid);
}
            
function drawOnGrid(e) {
    e.target.style.backgroundColor = 'rgb(0 0 0 / 95%)';
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
    divContainer.style.margin = '0 auto 2%';
    divContainer.style.height = '80%';
    divContainer.style.width = '80%';
    for (let i = 0; i < qty; i++) {
        let tempDiv = document.createElement('div');
        tempDiv.style.backgroundColor = 'rgb(248 248 248 / 96%)';
        tempDiv.className = 'grid-div';
        tempDiv.style.border = '1px solid rgb(0 0 0 / 80%)';
        tempDiv.style.flex = '1 1 auto';
        //16*16:
        if (qty <= 256) {
            tempDiv.style.height = '6%';
            tempDiv.style.width = '6%';
        } 
        //32*32:
        else if (qty > 256 && qty <= 1024) {
            tempDiv.style.height = '3%';
            tempDiv.style.width = '3.1%';
        } 
        //64*64:
        else {
            tempDiv.style.border = '0.5px solid rgb(0 0 0 / 80%)';
            tempDiv.style.height = '1.14%';
            tempDiv.style.width = '1.55%';
        }

        tempDiv.addEventListener('mouseover', drawOnGrid);
        divContainer.appendChild(tempDiv);
    }
    return divContainer;
}
