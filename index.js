'use strict';

const container = document.querySelector('#container');
container.style.backgroundColor = 'rgb(255, 0, 0)';
container.style.border = '1px solid black';
container.style.display = 'flex';
container.style.margin = '0 auto';
container.style.padding = '1%';
container.style.width = '85%';
container.style.height = '100%';

const divQty = 16 * 16;
const gridContainer = generateDivGrid(divQty);

gridContainer.style.margin = 'auto';
gridContainer.style.padding = '5% 5% 2%';
gridContainer.style.width = '85%';

const knobsDiv = document.createElement('div');
const leftKnob = document.createElement('div');
const rightKnob = document.createElement('div');


leftKnob.style.backgroundColor = 'white';
leftKnob.style.borderRadius = '100%';
leftKnob.style.height = '20rem';
leftKnob.style.margin = '0 5% 2%';
leftKnob.style.width = '20rem';
rightKnob.style.backgroundColor = 'white';
rightKnob.style.borderRadius = '100%';
rightKnob.style.height = '20rem';
rightKnob.style.margin = '0 5% 2%';
rightKnob.style.width = '20rem';

knobsDiv.appendChild(leftKnob);
knobsDiv.appendChild(rightKnob);

knobsDiv.style.alignItems = 'flex-start';
knobsDiv.style.display = 'flex';
knobsDiv.style.justifyContent = 'space-between';
knobsDiv.style.margin = '0 auto';

const sketchContainer = document.createElement('div');
sketchContainer.style.width = '100%';
sketchContainer.style.height = '100%';

sketchContainer.appendChild(gridContainer);
sketchContainer.appendChild(knobsDiv);

container.appendChild(sketchContainer);


/*-------------------------------------------------------*/

function generateDivGrid(qty) {
    let divContainer = document.createElement('div');
    for (let i = 0; i < qty; i++) {
        let tempDiv = document.createElement('div');
        tempDiv.style.backgroundColor = 'whitesmoke';
        tempDiv.style.border = '1px solid rgb(0 0 0 / 65%)';
        tempDiv.style.flex = '1 1 auto';
        // tempDiv.style.margin = '0';
        // tempDiv.style.padding = '0';
        divContainer.appendChild(tempDiv);
    }
    return divContainer;
}