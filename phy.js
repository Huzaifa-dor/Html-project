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


//Momentum calculator

const momentumMass = document.getElementById('massMomentum');
const momentumVelocity = document.getElementById('velocityMomentum');
const momentumContainer = document.getElementById('momentumContainer')
const momentumButton = document.getElementById('momentumButton');

function momentumCalculation(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = y1*y2;
        result = result.toFixed(2);
        Container.textContent = `The Value is ${result} N.s`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
    }
}

momentumButton.addEventListener('click', function () {
    let massM = momentumMass.value;
    let velocityM = momentumVelocity.value;

    momentumCalculation(massM, velocityM, momentumContainer, momentumMass, momentumVelocity);
})

//Force Calculator

const forceMass = document.getElementById('massForce');
const forceAcc = document.getElementById('accForce');
const forceButton = document.getElementById('buttonForce');
const forceContainer = document.getElementById('containerForce');

function forceCalculation (val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = y1*y2;
        result = result.toFixed(2);
        container.textContent = `The value is ${result} N`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("Incorrect Values!")
    }
}

forceButton.addEventListener('click', function() {
    let massF = forceMass.value;
    let accF = forceAcc.value;

    forceCalculation(massF, accF, forceContainer, forceMass, forceAcc);
})

//speed calculators

const speedDistance = document.getElementById('distanceSpeed');
const speedTime = document.getElementById('timeSpeed');
const speedButton = document.getElementById('buttonSpeed');
const speedContainer = document.getElementById('containerSpeed');

function speedCalculation (val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if(y2 !== 0) {
            let result = y1/y2;
            result = result.toFixed(2);
            container.textContent = `The value is ${result} ms-1`;
            box1.value = "";
            box2.value = "";
        }else{
            alert("Time CANNOT be Zero!");
        }
    }else{
        alert("Values are incorrect!");
    }
}

speedButton.addEventListener('click', function () {
    let distanceS = speedDistance.value;
    let timeS = speedTime.value;

    speedCalculation(distanceS, timeS, speedContainer, speedDistance, speedTime);
})

//acceleration Calculator!

const accInitial = document.getElementById('accInitial');
const accFinal = document.getElementById('accFinal');
const accTime = document.getElementById('accTime');
const accButton = document.getElementById('accButton');
const accContainer = document.getElementById('accContainer');

function accelerationCalculation ( val1, val2, val3 , container, box1, box2, box3) {
    if (isNumber(val1, val2)) {
        if(isNumber(val3, "1")) {
            let y1 = Number(val1);
            let y2 = Number(val2);
            let y3 = Number(val3);
            if(y3 !== 0) {
                let result = (y1-y2)/y3;
                result = result.toFixed(2);
                container.textContent = `the Value is ${result} ms-2`;
                box1.value = "";
                box2.value = "";
                box3.value = "";
            }
        }
    }
}

accButton.addEventListener('click', function () {
    let initialAcc = accInitial.value;
    let finalAcc = accFinal.value;
    let timeAcc = accTime.value;

    accelerationCalculation(finalAcc, initialAcc, timeAcc, accContainer, accInitial,accFinal, accTime)
})

//Vol.Cube calculator!

const cubeLen = document.getElementById("lenCube");
const cubeButton = document.getElementById("buttonCube");
const cubeContainer = document.getElementById("containerCube");

function volumecubecalculation(val1, container, box1) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = y1*y1*y1;
        result = result.toFixed(2);
        container.textContent = `The Value is ${result} m3`;
        box1.value = "";
    }else {
        alert("Put Correct values and real numbers in S-I unit of lenght = Meter!")
    }
}

cubeButton.addEventListener('click' , function () {
    let lenghtVC = cubeLen.value;

    volumecubecalculation(lenghtVC, cubeContainer, cubeLen)
})

//Vol.SPhere Calculator

const sphRad = document.getElementById("radSph");
const sphButton = document.getElementById("sphButton");
const sphContainer = document.getElementById("sphContainer");

function volspherecalculation (val1, container, box1) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let y1Cubed = y1*y1*y1;
        let result = (4/3)*3.14*y1Cubed;
        result = result.toFixed(2);
        container.textContent = `The Value is ${result} m3`;
        box1.value = "";
    }else{
        alert("Put Correct values and real numbers in S-I unit of lenght = Meter!")
    }
}

sphButton.addEventListener('click', function () {
    let radiusSph = sphRad.value;

    volspherecalculation(radiusSph, sphContainer, sphRad);
})

//ResistanceCalculator

const resisVolt = document.getElementById("voltResis");
const resisCurrent = document.getElementById('currentResis');
const resisButton = document.getElementById('buttonResis');
const resisContainer = document.getElementById('containerResis');

function resistanceCalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2 !== 0) {
            let result = y1/y2;
            result = result.toFixed(2);
            container.textContent = `The Value is ${result} ohms`;
            box1.value ="";
            box2.value = "";
        }else{
            alert("Current Cant be 0");
        }
    }else{
        alert("Put Correct values and real numbers in S-I unit of lenght = Meter!")
    }
}

resisButton.addEventListener('click', function() {
    let voltageR = resisVolt.value;
    let currentR = resisCurrent.value;

    resistanceCalculator(voltageR, currentR, resisContainer, resisVolt, resisCurrent)
})

//Volatge Calcualtor..
const voltCurrent = document.getElementById('currentVolt');
const voltResistance = document.getElementById('resisVolt');
const voltButton = document.getElementById('buttonVolt');
const voltContainer = document.getElementById('containerVolt');

function voltageCalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        
        let result = y1*y2;
        result = result.toFixed(2);
        container.textContent = `The Value is ${result} volts`;
        box1.value ="";
        box2.value = "";
        
        
    }else{
        alert("Put Correct values and real numbers in S-I unit of lenght = Meter!")
    }
}

voltButton.addEventListener('click', function () {
    let currentV = voltCurrent.value;
    let resisV = voltResistance.value;

    voltageCalculator(currentV, resisV, voltContainer, voltCurrent, voltResistance)
})

//KE Calculator

const keMass = document.getElementById('massKE');
const keVelocity = document.getElementById('velocityKE');
const keButton = document.getElementById('buttonKE');
const keContainer = document.getElementById('containerKE');

function KECalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        
        let result = 0.5*y1*(y2*y2);
        result = result.toFixed(2);
        container.textContent = `The Value is ${result} J`;
        box1.value ="";
        box2.value = "";
        
        
    }else{
        alert("Put Correct values and real numbers in S-I unit of lenght = Meter!")
    }
}

keButton.addEventListener('click', function() {
    let massK = keMass.value;
    let velocityK = keVelocity.value;

    KECalculator(massK, velocityK, keContainer, keMass, keVelocity)
})

const peMass = document.getElementById("massPE");
const peHeight = document.getElementById("heightPE");
const peButton = document.getElementById("buttonPE");
const peContainer = document.getElementById("containerPE");

function PECalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        
        let result = y1*9.81*y2;
        result = result.toFixed(2);
        container.textContent = `The Value is ${result} J`;
        box1.value ="";
        box2.value = "";
        
        
    }else{
        alert("Put Correct values and real numbers in S-I unit")
    }
}

peButton.addEventListener('click' , function () {
    let massP = peMass.value;
    let heightP = peHeight.value;

    PECalculator(massP, heightP, peContainer, peMass, peHeight)
})

//Power Calculator 

const powerWork = document.getElementById('workPower');
const powerTime = document.getElementById('timePower');
const powerButton = document.getElementById('buttonPower');
const powerContainer = document.getElementById('containerPower');

function powerCalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2 !== 0){
            let result = y1/y2;
            result = result.toFixed(2);
            container.textContent = `The Value is ${result} watts`;
            box1.value ="";
            box2.value = "";
        }else{
            alert("The 2nd Value Cant be zero!")
        }
        
    }else{
        alert("Put Correct values and real numbers in S-I unit")
    }
}

powerButton.addEventListener('click' , function() {
    let workP = powerWork.value;
    let timeP = powerTime.value;

    powerCalculator(workP, timeP, powerContainer, powerWork, powerTime)
})

//Centripertal Force Calculator

const cfMass = document.getElementById('massCF');
const cfVelocity = document.getElementById('velocityCF');
const cfRad = document.getElementById('radCF');
const cfButton = document.getElementById('buttonCF');
const cfContainer = document.getElementById('containerCF');

function cfCalculator ( val1, val2, val3 , container, box1, box2, box3) {
    if (isNumber(val1, val2)) {
        if(isNumber(val3, "1")) {
            let y1 = Number(val1);
            let y2 = Number(val2);
            let y3 = Number(val3);
            if(y3 !== 0) {
                let result = (y1*(y2*y2))/y3;
                result = result.toFixed(2);
                container.textContent = `the Value is ${result} N`;
                box1.value = "";
                box2.value = "";
                box3.value = "";
            }
        }
    }
}

cfButton.addEventListener('click', function() {
    let massCF = cfMass.value;
    let velocityCF = cfVelocity.value;
    let radCF = cfRad.value;

    cfCalculator(massCF, velocityCF, radCF, cfContainer, cfMass, cfVelocity, cfRad)
})
