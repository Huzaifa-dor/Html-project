function isNumber(num1, num2) {
    if (!isNaN(num1) && num1.trim() !== "") {
        Number(num1);
        if (!isNaN(num2) && num2.trim() !== ""){
            Number(num2);
            return true;
        }else{
            return false;
            
        }
    }
    else{
        console.log('hello 2');
        return false;
        }
}

//Addition

const addValue1 = document.getElementById('1stvalAdd');
const addValue2 = document.getElementById('2ndvalAdd');
const addButton = document.getElementById('buttonAdd');
const addContainer = document.getElementById('containerAdd');

function additionCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = y1+y2;
        result = result.toFixed(2);
        Container.textContent = `When we add ${y1} and ${y2} we get ${result}!`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
    }
}
addButton.addEventListener('click' , function() {
    let val1Add = addValue1.value;
    let val2Add = addValue2.value;
    additionCalculator(val1Add, val2Add, addContainer, addValue1, addValue2)
})

const subtValue1 = document.getElementById('1stvalSubt');
const subtValue2 = document.getElementById('2ndvalSubt');
const subtButton = document.getElementById('buttonSubt');
const subtContainer = document.getElementById('containerSubt');

function subtractionCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = y1-y2;
        result = result.toFixed(2);
        Container.textContent = `When we subtract ${y1} and ${y2} we get ${result}!`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
    }
}
subtButton.addEventListener('click' , function() {
    let val1Subt = subtValue1.value;
    let val2Subt = subtValue2.value;
    subtractionCalculator(val1Subt, val2Subt, subtContainer, subtValue1, subtValue2)
})

const multValue1 = document.getElementById('1stvalMult');
const multValue2 = document.getElementById('2ndvalMult');
const multButton = document.getElementById('buttonMult');
const multContainer = document.getElementById('containerMult');

function multiplicationCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        result = result.toFixed(2);
        let result = y1*y2;
        Container.textContent = `When we multiply ${y1} and ${y2} we get ${result}!`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
    }
}
multButton.addEventListener('click' , function() {
    let val1Mult = multValue1.value;
    let val2Mult = multValue2.value;
    multiplicationCalculator(val1Mult, val2Mult, multContainer, multValue1, multValue2)
})  
//division
const divValue1 = document.getElementById('1stvalDiv');
const divValue2 = document.getElementById('2ndvalDiv');
const divButton = document.getElementById('buttonDiv');
const divContainer = document.getElementById('containerDiv');

function divisionCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2 !== 0) {
            let result = y1/y2;
            result = result.toFixed(2);
            Container.textContent = `When we Divide ${y1} and ${y2} we get ${result}!`;
            box1.value = "";
            box2.value = "";
        } else {
            alert("Second value cant be 0!")
            box1.value = "";
            box2.value = "";
        }
    }else{
        alert("The Values are Incorrect!");
        box1.value = "";
        box2.value = "";
    }
}
divButton.addEventListener('click' , function() {
    let val1Div = divValue1.value;
    let val2Div = divValue2.value;
    divisionCalculator(val1Div, val2Div, divContainer, divValue1, divValue2)
})


//Square Calculator

const sqBase = document.getElementById('baseSq');
const sqButton = document.getElementById('buttonSq');
const sqContainer = document.getElementById('containerSq');

function sqCalculator ( val1, container, box1) {
    if(isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = y1*y1;
        result = result.toFixed(2);
        container.textContent = `When we Square ${y1} we get ${result}!`;
        box1.value = "";
    }else {
    alert("The Values are Incorrect!");
        box1.value = "";
        box2.value = "";
}
}
sqButton.addEventListener('click', function () {
    let baseS = sqBase.value;
    sqCalculator(baseS, sqContainer, sqBase)
})

//Cube Calculator

const cubeBase = document.getElementById('baseCube');
const cubeButton = document.getElementById('buttonCube');
const cubeContainer = document.getElementById('containerCube');

function cubeCalculator ( val1, container, box1) {
    if(isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = y1*y1*y1;
        result = result.toFixed(2);
        container.textContent = `When we Cube ${y1} we get ${result}!`;
        box1.value = "";
    }else {
    alert("The Values are Incorrect!");
        box1.value = "";
}
}
cubeButton.addEventListener('click', function () {
    let baseC = cubeBase.value;
    cubeCalculator(baseC, cubeContainer, cubeBase)
})
// Exponent XCalculator
const expoBase = document.getElementById('baseExpo');
const expoIndex = document.getElementById('indexExpo');
const expoButton = document.getElementById('buttonExpo');
const expoContainer = document.getElementById('containerExpo');

function exponentCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = y1 ** y2;
        result = result.toFixed(2);
        Container.textContent = `When we Exponent ${y1} to ${y2} we get ${result}!`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
    }
}
expoButton.addEventListener('click' , function() {
    let baseE = expoBase.value;
    let indexE = expoIndex.value;
    exponentCalculator(baseE, indexE, expoContainer, expoBase, expoIndex)
}) 

//Percentage Calculator

const percPart = document.getElementById('partPerc');
const percWhole = document.getElementById('wholePerc');
const percButton = document.getElementById('buttonPerc');
const percContainer = document.getElementById('containerPerc');

function percentageCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if(y2 !== 0 && y2>y1) {
        let result = (y1/y2)*100;
        result = result.toFixed(2);
        Container.textContent = `The percentage of ${y1} as a part to ${y2} as a whole, we get ${result}%`;
        box1.value = "";
        box2.value = "";
        }else{
            alert("Cant be zero whole... or Part cannot be greater than Whole")
        }
    }else{
        alert("The Values are Incorrect!");
    }
}
percButton.addEventListener('click' , function() {
    let partP = percPart.value;
    let wholeP = percWhole.value;
    percentageCalculator(partP, wholeP, percContainer, percPart, percWhole)
})