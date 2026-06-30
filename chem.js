// Mole Calculaotr....
const moleInp1 = document.getElementById("massinp");
const moleInp2 = document.getElementById("molmassinp");
const moleButton = document.getElementById("buttmole");
const resultParaMole = document.getElementById('molecontainer')


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
function moleCalculation(val1, val2, container, inp1, inp2) {
    if (isNumber(val1, val2)) {
        val1= Number(val1);
        val2= Number(val2);
        if (val2 !== 0) {
            let answer =val1 / val2;
            container.textContent = "Value = " + answer +" mol.";
            inp1.value = "";
            inp2.value = "";
            console.log(answer);
        }else{
            alert("ERR_02===Value 2 can never be 0 molar mass...");
        }
        }else{
        alert("ERR_01===Values are incorrect Please provide right and S-I unit values already converted to get the answer in the S-I unit of mole: mol.")
    }
}
moleButton.addEventListener('click', function(){
    let moleInput1 = moleInp1.value;
let moleInput2 = moleInp2.value;
    moleCalculation(moleInput1, moleInput2, resultParaMole, moleInp1, moleInp2);
})

//Density Calculator

const denseBox = document.getElementById("densityMass");
const denseBox2 = document.getElementById("densityVolume");
const denseResult = document.getElementById("denseContainer");
const denseButton = document.getElementById("densityButton");

function densityCalculation(val1, val2, container, inp1, inp2) {
    if (isNumber(val1, val2)) {
        val1= Number(val1);
        val2= Number(val2);
        if (val2 !== 0) {
            let answer=val1/val2;
            container.textContent = `The Value is ${answer} kg/m3`;
            inp1.value = "";
            inp2.value = "";
        }else{
            alert("ERR_02===Value 2 can never be 0 molar mass...")
        }
    }else{
        alert("ERR_01===Values are incorrect Please provide right and S-I unit values already converted to get the answer in the S-I unit of density: kg/m3")
    }
}

denseButton.addEventListener('click', function() {
    let massD = denseBox.value;
    let volumeD= denseBox2.value;

    densityCalculation(massD, volumeD, denseResult, denseBox, denseBox2);
})

//Avogadro particle calculation

const avogadroBox = document.getElementById("avogadroMass");
const avogadroButton= document.getElementById("avogadroButton")
const avogadroContainer = document.getElementById("avogadroContainer")

function particleCalculation (val1, container, box) {
    if (isNumber(val1, "1")) {
        let mass= Number(val1);
        let result = mass*6.022e23;
        container.textContent = `The value is ${result} atoms/molecules.`;
        box.value = "";
    }else{
        alert("The Value you provided is incorrect, Keep in mind the value should be in S-I unit of mass; kg .")
    }
}

avogadroButton.addEventListener('click', function() {
    let mass = avogadroBox.value;
    particleCalculation(mass, avogadroContainer, avogadroBox)
})

//Molarity Calculator

const molarityBox = document.getElementById("molarityMoles");
const molarityBox2 = document.getElementById("molarityVolume");
const molarityButton = document.getElementById("molarityButton");
const molarityContainer = document.getElementById("molarityContainer");

function molarityCalculation (val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let mole = Number(val1);
        let volume = Number(val2);
        if (volume !== 0) {
            let result = mole/volume;
            container.textContent = `The Value is ${result} mol/L`;
            box1.value = "";
            box2.value = "";
        }else{
            alert("The Value you provided are incorrect!")
        }
    }else{
        alert("ERR__03 === Values are incorrect!")
    }
}
molarityButton.addEventListener('click', function() {
    let moleValue = molarityBox.value;
    let volumeValue = molarityBox2.value;

    molarityCalculation (moleValue, volumeValue, molarityContainer, molarityBox, molarityBox2)
})

// Yield Calculator Effieciency calculator 
const actyield = document.getElementById("actyield");
const theoyield = document.getElementById("theoyield");
const yieldContainer = document.getElementById("yieldContainer");
const yieldButton = document.getElementById("yieldButton")

function yieldCalculation(val1, val2, container, box1, box2) {
    if(isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2 !== 0 && y1 < y2) {
            let result = (y1/y2)*100;
            container.textContent = `The Value is ${result} %`;
            box1.value = "";
            box2.value = "";
        }else{
            alert("The values you've given are incoorect, either the Theoratical Value is 0 or Actual Yield is greater than Theoretical value ;)")
        }
    }else{
        alert("Values are incorrect!")
    }
}

yieldButton.addEventListener('click' , function() {
    let actualYield = actyield.value;
    let theoreticalYield = theoyield.value;

    yieldCalculation(actualYield, theoreticalYield, yieldContainer, actyield, theoyield);
})

//pH Calculator!

const pHConc = document.getElementById("pHConc");
const pHButton = document.getElementById("pHButton");
const pHContainer = document.getElementById("pHContainer");

function pHCalculation(val1, conatiner, box1) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        if (y1 >= 0 && y1 <= 14) {
            result= -Math.log10(y1);
            conatiner.textContent = `The Value is ${result} pH`;
            pHConc.value = "";
        }else{
            alert("The H+ concentration should be lower than 14 and higher then or equal to 0!")
            pHConc.value = "";
        }
    }else{
        alert("Incorrect Values!");
    }
}

pHButton.addEventListener('click' , function () {
    let concentration = pHConc.value;

    pHCalculation(concentration, pHContainer, pHConc);
})