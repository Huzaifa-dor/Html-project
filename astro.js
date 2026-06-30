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

//Escape Velocity
const escVMass = document.getElementById('massEscV');
const escVRad = document.getElementById('radEscV');
const escVButton = document.getElementById('buttonEscV');
const escVContainer = document.getElementById('containerEscV');
const gravitationalConstantG = 6.674e-11;

function escapeVelocityCalculator(val1, val2, Container, box1, box2, constG) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if(y2 !== 0) {
        let result = Math.sqrt((2*constG*y1)/y2);
        result = result.toFixed(2);
        Container.textContent = `The escape Velocity of a planet with Mass = ${y1} and Radius = ${y2} is ${result} m/sec2`;
        box1.value = "";
        box2.value = "";
        }else{
            alert("Second Value Cant be 0")
            box1.value = "";
            box2.value = "";
        }
    }else{
        alert("The Values are Incorrect!");
    }
}
escVButton.addEventListener('click' , function() {
    let massPlanetEscV = escVMass.value;
    let radPlanetEscV = escVRad.value;
    escapeVelocityCalculator(massPlanetEscV, radPlanetEscV, escVContainer, escVMass, escVRad, gravitationalConstantG) 
})

//Weight Calculator
const weightMass = document.getElementById('massWeight');
const weightGravity = document.getElementById('gravityWeight');
const weightButton = document.getElementById('buttonWeight');
const weightContainer = document.getElementById('containerWeight');

function weightCalculator(val1, val2, Container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = y1*y2;
        result = result.toFixed(2);
        Container.textContent = `The weight of an object with Mass ${y1}kg on an object with gravity ${y2} m/sec2 is ${result} N`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
    }
}
weightButton.addEventListener('click' , function() {
    let massW= weightMass.value;
    let gravityW = weightGravity.value;
    weightCalculator(massW, gravityW, weightContainer, weightMass, weightGravity) 
})
//Orbital Velocity Calculator
const orbVMass = document.getElementById('massOrbV');
const orbVRad = document.getElementById('radOrbV');
const orbVButton = document.getElementById('buttonOrbV');
const orbVContainer = document.getElementById('containerOrbV');

function orbitalVelocityCalculator(val1, val2, Container, box1, box2, constG) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2 !== 0) {
        let result = Math.sqrt((constG*y1)/y2);
        result = result.toFixed(2);
        Container.textContent = `A planet with Mass ${y1} kg and Orbital Radius ${y2} has an Orbital Velocity of ${result} m/s`;
        box1.value = "";
        box2.value = "";
        }else{
            alert("Second Value cant be 0")
            box1.value = "";
            box2.value = "";
        }
    }else{
        alert("The Values are Incorrect!");
        box1.value = "";
        box2.value = "";
    }
}
orbVButton.addEventListener('click' , function() {
    let massOrbV= orbVMass.value;
    let radOrbV= orbVRad.value;
    orbitalVelocityCalculator(massOrbV, radOrbV, orbVContainer, orbVMass, orbVRad, gravitationalConstantG)

})
//Light time Calculator
const lightTimeDistance = document.getElementById('distanceLTime');
const lightTimeButton = document.getElementById('buttonLTime');
const lightTimeContainer = document.getElementById('containerLTime');
const c = 299792458;

function lightTimeCalculator (val1, container, box1,constC) {
    if(isNumber(val1, "1")) {
        y1 = Number(val1);
        let result = y1/constC;
        result = result.toFixed(2);
        container.textContent = `The time taken light to travel a distance ${y1}m is ${result}seconds.`;
        box1.value = "";
    }else{
        alert("Values are incorrect!")
    }
}
lightTimeButton.addEventListener('click', function () {
    let distanceLTime = lightTimeDistance.value;
    lightTimeCalculator(distanceLTime, lightTimeContainer, lightTimeDistance, c)
})
//Redshift Velocity Calculator
const rVelocityRedshift = document.getElementById('redshiftRVelocity');
const rVelocityButton = document.getElementById('buttonRVelocity');
const rVelocityContainer = document.getElementById('containerRVelocity');

function rVelocityCalculator (val1, container, box1, constC) {
    if(isNumber(val1, "1")) {
        y1 = Number(val1);
        let result = y1*constC;
        result = result.toFixed(2);
        container.textContent = `The Redshift Velocity of redshift ${y1} is ${result} m/s!`;
        box1.value = "";
    }else{
        alert("Values are incorrect!")
    }
}
rVelocityButton.addEventListener('click', function () {
    let redshiftRV = rVelocityRedshift.value;
    rVelocityCalculator(redshiftRV, rVelocityContainer, rVelocityRedshift, c)
})
//Schwarzschild Calculator
const schRadMass = document.getElementById('massSchRad');
const schRadButton = document.getElementById('buttonSchRad');
const schRadContainer = document.getElementById('containerSchRad');

function schRadCalculator (val1, container, box1, constC,constG) {
    if(isNumber(val1, "1")) {
        y1 = Number(val1);
        let result = (2*constG*y1)/(constC*constC);
        result = result.toFixed(2);
        container.textContent = `The Schwarzschild Radius of Mass ${y1}kg  is ${result} m`;
        box1.value = "";
    }else{
        alert("Values are incorrect!")
    }
}
schRadButton.addEventListener('click', function () {
    let massSR = schRadMass.value;
    schRadCalculator(massSR, schRadContainer, schRadMass, c,gravitationalConstantG)
})

//Surface Gravity
const surfGravMass = document.getElementById('massSurfGrav');
const surfGravRad = document.getElementById('radSurfGrav');
const surfGravButton = document.getElementById('buttonSurfGrav');
const surfGravContainer = document.getElementById('containerSurfGrav');

function surfGravCalulator(val1, val2, Container, box1, box2, constG) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2 !== 0) {
        let result = (constG*y1)/(y2*y2);
        result = result.toFixed(2);
        Container.textContent = `A planet with Mass ${y1} kg and Radius ${y2} has a Surface Gravity of ${result} m/s2`;
        box1.value = "";
        box2.value = "";
        }else{
            alert("Second Value cant be 0")
            box1.value = "";
            box2.value = "";
        }
    }else{
        alert("The Values are Incorrect!");
        box1.value = "";
        box2.value = "";
    }
}
surfGravButton.addEventListener('click' , function() {
    let massSG= surfGravMass.value;
    let radSG= surfGravRad.value;
    surfGravCalulator(massSG, radSG, surfGravContainer, surfGravMass, surfGravRad, gravitationalConstantG)

})
//Stellar Luminiousity Calculator
const stLumRad = document.getElementById('starRadLum');
const stLumTemp = document.getElementById('tempLum');
const stLumButton = document.getElementById('buttonLum');
const stLumContainer = document.getElementById('conatainerLum');
const Pie = 3.14;
const sigma = 5.67e-8;

function stLumCalculator(val1, val2, Container, box1, box2, constPie, constSigma) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = 4*constPie*(y1*y1)*constSigma*(y2 ** 4);
        result = result.toFixed(2);
        Container.textContent = `A Star with Radius ${y1} m and temperature ${y2} K has a Stellar Luminiousity of ${result} Watts`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("The Values are Incorrect!");
        box1.value = "";
        box2.value = "";
    }
}
stLumButton.addEventListener('click' , function() {
    let radSL= stLumRad.value;
    let tempSL= stLumTemp.value;
    stLumCalculator(radSL, tempSL, stLumContainer, stLumRad, stLumTemp, Pie, sigma)

})
