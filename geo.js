function alert1 (op) {
    if (op == "Inc") {
        alert("Incorrect Values");
    }else if (op == "0div") {
        alert("The value cant be Zero in dvision, the result will be infinity!")
    }else{
        alert("Error!")
    }
}
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

//Area of a circle
const areaCircleRad = document.getElementById('radAreaCircle');
const areaCircleButton = document.getElementById('buttonAreaCircle');
const areaCircleContainer = document.getElementById('containerAreaCircle');
const pie = Math.PI;

function circleAreaCalculator (val1, container, box1, pie) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = pie*(y1*y1);
        result = result.toFixed(2);
        container.textContent = `The Area of Circle with radius ${y1}m is ${result}m2`;
        box1.value = "";
    }else {
        alert("The Values are incorrect!");
    }
}
areaCircleButton.addEventListener('click', function() {
    let radAC = areaCircleRad.value;
    circleAreaCalculator(radAC, areaCircleContainer, areaCircleRad, pie)
})
//Circumference calulator Circle
const circCircleRad = document.getElementById('radCircCircle');
const circCircleButton = document.getElementById('buttonCircCircle');
const circCircleContainer = document.getElementById('containerCircCircle');


function circleCircumferenceCalculator (val1, container, box1, pie) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = 2*pie*y1;
        result = result.toFixed(2);
        container.textContent = `The Circumference of a Circle with radius ${y1}m is ${result}m`;
        box1.value = "";
    }else {
        alert("The Values are incorrect!");
    }
}
circCircleButton.addEventListener('click', function() {
    let radCC = circCircleRad.value;
    circleCircumferenceCalculator(radCC, circCircleContainer, circCircleRad, pie)
})
//Area Triangle Calculator
const areaTriBreadth = document.getElementById('breadthAreaTri');
const areaTriHeight = document.getElementById('heightAreaTri');
const areaTriButton = document.getElementById('buttonAreaTri');
const areaTriContainer = document.getElementById('containerAreaTri')
function triangleAreaCalculator(val1, val2, container,box1, box2) {
    if(isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = (1/2)*y1*y2;
        result = result.toFixed(2);
        container.textContent = `The Area of a triangle of breadth ${y1} and Height ${y2}m is ${result} m2`;
        box1.value = "";
        box2.value = "";
    }else{
        alert("Values are incorrect!");
    }
}
areaTriButton.addEventListener('click', function() {
    let breadthAT = areaTriBreadth.value;
    let heightAT = areaTriHeight.value;
    triangleAreaCalculator(breadthAT, heightAT, areaTriContainer, areaTriBreadth, areaTriHeight)
})
//Area Trapezoid Calculator
const areaTrapA = document.getElementById("aAreaTrap");
const areaTrapB = document.getElementById('bAreaTrap');
const areaTrapH = document.getElementById('hAreaTrap');
const areaTrapButton = document.getElementById('buttonAreaTrap');
const areaTrapContainer = document.getElementById('containerAreaTrap');
function trapezoidAreaCalculator (val1, val2, val3, container, box1, box2, box3) {
    if (isNumber(val1, val2)) {
        if(isNumber(val3, "1")) {
            let y1 = Number(val1);
            let y2 = Number(val2);
            let y3 = Number(val3);
            let result = ((y1+y2)*y3)/2;
            result = result.toFixed(2);
            container.textContent = `The Area of a Trapezoid with a ${y1}, breadth ${y2} and height ${y3} is ${result}m2`;
            box1.value = "";
            box2.value = "";
            box3.value = "";
        }else{
        alert("Wrong Values!")
        box1.value = "";
        box2.value = "";
        box3.value = "";
    }
    }else{
        alert("Wrong Values!")
        box1.value = "";
        box2.value = "";
        box3.value = "";
    }
}
areaTrapButton.addEventListener('click', function () {
    let aAT = areaTrapA.value;
    let bAT = areaTrapB.value;
    let heightAT = areaTrapH.value;
    trapezoidAreaCalculator(aAT, bAT, heightAT, areaTrapContainer, areaTrapA, areaTrapB, areaTrapH)
})
//Sphere Volume Calculator
const volSphRadius = document.getElementById('radVolSph');
const volSphButton = document.getElementById('buttonVolSph');
const volSphContainer = document.getElementById('containerVolSph');
function sphereVolumeCalculators (val1, container, box1, pie) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = (4/3)*pie*(y1*y1*y1);
        result = result.toFixed(2);
        container.textContent = `Volume of a sphere with radius ${y1}m is ${result}m3`;
        box1.value = "";
    }else{
        alert("The Values are Wrong!");
    }
}
volSphButton.addEventListener('click', function() {
    let radVS = volSphRadius.value;
    sphereVolumeCalculators(radVS, volSphContainer, volSphRadius, pie)
})
//Cylinder Volume Clauclator
const volCylRad = document.getElementById('radVolCyl');
const volCylHeight = document.getElementById('heightVolCyl');
const volCylButton = document.getElementById('buttonVolCyl');
const volCylContainer = document.getElementById('containerVolCyl');
function cylinderVolumeCalculator(val1, val2, container, box1, box2,pie) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 =Number(val2);
        let result = pie*(y1*y1)*y2;
        result = result.toFixed(2);
        container.textContent = `The Volume of Cylinder of radius ${y1}m and height ${y2}m is ${result}m3 `;
        box1.value = "";
        box2.value = "";        
    }else{
        alert1("Inc")
    }
}
volCylButton.addEventListener('click', function () {
    let radVC = volCylRad.value;
    let heigthVC = volCylHeight.value;
    cylinderVolumeCalculator(radVC, heigthVC, volCylContainer, volCylRad, volCylHeight, pie)
})
//Volume of a cone
const volConeRad = document.getElementById('radVolCone');
const volConeHeight = document.getElementById('heightVolCone');
const volConeButton = document.getElementById('buttonVolCone');
const volConeContainer = document.getElementById('containerVolCone');
function coneVolumeCalculator(val1, val2, container, box1, box2,pie) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 =Number(val2);
        let result = (1/3)*pie*(y1*y1)*y2;
        result = result.toFixed(2);
        container.textContent = `The Volume of Cone of radius ${y1}m and height ${y2}m is ${result}m3 `;
        box1.value = "";
        box2.value = "";        
    }else{
        alert1("Inc")
    }
}
volConeButton.addEventListener('click', function () {
    let radVCone = volConeRad.value;
    let heigthVCone = volConeHeight.value;
    coneVolumeCalculator(radVCone, heigthVCone, volConeContainer, volConeRad, volConeHeight, pie)
})
//Surface Area of a Sphere
const surfSphRad = document.getElementById('radSurfSph');
const surfSphButton = document.getElementById('buttonSurfSph');
const surfSphContainer = document.getElementById('containerSurfSph');
function surfSphCalculator (val1, container, box1, pie) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = 4*pie*(y1*y1);
        result = result.toFixed(2);
        container.textContent = `The Surface Area of a Sphere with radius ${y1}m is ${result}m2`;
        box1.value = "";
    }else{
        alert1("Inc")
    }
}
surfSphButton.addEventListener('click', function () {
    let radSS = surfSphRad.value;
    surfSphCalculator(radSS, surfSphContainer, surfSphRad, pie)
})
//Surface Area of a Cube
const surfCubeSide = document.getElementById('sideSurfCube');
const surfCubeButton = document.getElementById('buttonSurfCube');
const surfCubeContainer = document.getElementById('containerSurfCube');
function surfCubeCalculator (val1, container, box1) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = 6*(y1*y1);
        result = result.toFixed(2);
        container.textContent = `The Surface Area of a Cube with side ${y1}m is ${result}m2`;
        box1.value = "";
    }else{
        alert1("Inc")
    }
}
surfCubeButton.addEventListener('click', function () {
    let sideSC = surfCubeSide.value;
    surfCubeCalculator(sideSC, surfCubeContainer, surfCubeSide)
})
//Volume of a Cube
const volCubeSide = document.getElementById('sideVolCube');
const volCubeButton = document.getElementById('buttonVolCube');
const volCubeContainer = document.getElementById('containerVolCube');
function cubeVolumeCalculators (val1, container, box1) {
    if (isNumber(val1, "1")) {
        let y1 = Number(val1);
        let result = y1 ** 3;
        result = result.toFixed(2);
        container.textContent = `Volume of a Cube with side ${y1}m is ${result}m3`;
        box1.value = "";
    }else{
        alert("The Values are Wrong!");
    }
}
volCubeButton.addEventListener('click', function() {
    let sideVC = volCubeSide.value;
    cubeVolumeCalculators(sideVC, volCubeContainer, volCubeSide)
})
//SIde A Calulator Pyhtagorean Theorem
const perpPythaA = document.getElementById('pythaAPerp');
const hypPythaA = document.getElementById('pythaAHyp');
const buttonPythaA = document.getElementById('pythaAButton');
const containerPythaA = document.getElementById('pythaAContainer');
function pythaACalulator (val1, val2, container, box1, box2) {
    if(isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y1 < y2 && y1 !== y2) {
        let result = Math.sqrt((y2*y2)-(y1*y1));
        result = result.toFixed(2);
        container.textContent = `The Side A [Base] of a Right Angled Triangle is with Side B [Perpendicular] ${y1} and Side C [Hypoteneues] ${y2} is ${result}`;
        box1.value = "";
        box2.value = "";
        } else{
            alert("The Value of Perpendicular cant be equal or greater than hypoteneous, Thats not Valid!")
        }
    }else{
        alert1("Inc");
    }
}
buttonPythaA.addEventListener('click', function() {
    let bPythaA = perpPythaA.value;
    let cPythaA = hypPythaA.value;
    pythaACalulator(bPythaA, cPythaA, containerPythaA, perpPythaA, hypPythaA)
})
//SIde B Calulator Pythagorean theorem
const basePythaB = document.getElementById('pythaBBase');
const hypPythaB = document.getElementById('pythaBHyp');
const buttonPythaB = document.getElementById('pythaBButton');
const containerPythaB = document.getElementById('pythaBContainer');
function pythaBCalulator (val1, val2, container, box1, box2) {
    if(isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y1 < y2 && y1 !== y2) {
        let result = Math.sqrt((y2*y2)-(y1*y1));
        result = result.toFixed(2);
        container.textContent = `The Side B [Perpendicular] of a Right Angled Triangle is with Side A [Base] ${y1}m and Side C [Hypoteneues] ${y2}m is ${result}m`;
        box1.value = "";
        box2.value = "";
        } else{
            alert("The Value of Perpendicular cant be equal or greater than hypoteneous, Thats not Valid!")
        }
    }else{
        alert1("Inc");
    }
}
buttonPythaB.addEventListener('click', function() {
    let aPythaB = basePythaB.value;
    let cPythaB = hypPythaB.value;
    pythaBCalulator(aPythaB, cPythaB, containerPythaB, basePythaB, hypPythaB)
})
//Side C Calculator
const basePythaC = document.getElementById('pythaCBase');
const perpPythaC = document.getElementById('pythaCPerp');
const buttonPythaC = document.getElementById('pythaCButton');
const containerPythaC = document.getElementById('pythaCContainer');
function pythaCCalulator (val1, val2, container, box1, box2) {
    if(isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = Math.sqrt((y1*y1)+(y2*y2));
        result = result.toFixed(2);
        container.textContent = `The Side C [Hypoteneous] of a Right Angled Triangle is with Side A [Base] ${y1}m and Side B [Perpendicular] ${y2}m is ${result}m`;
        box1.value = "";
        box2.value = "";
    }else{
        alert1("Inc");
    }
}
buttonPythaC.addEventListener('click', function() {
    let aPythaC = basePythaC.value;
    let bPythaC = perpPythaC.value;
    pythaCCalulator(aPythaC, bPythaC, containerPythaC, basePythaC, perpPythaC)
})
//Midpoint Calculator
const x1Mid = document.getElementById('midx1');
const x2Mid = document.getElementById('midx2');
const y1Mid = document.getElementById('midy1');
const y2Mid = document.getElementById('midy2');
const buttonMid = document.getElementById('midpointButton');
const containerMid = document.getElementById('midpointContainer');
function midpointCalculator (val1, val2, val3, val4, container, box1, box2, box3, box4) {
    if (isNumber(val1, val2)) {
        if(isNumber(val3, val4)) {
            let z1 = Number(val1);
            let z2 = Number(val2);
            let z3 = Number(val3);
            let z4 = Number(val4);
            let midX = (z1+z2)/2;
            let midY = (z3+z4)/2;
            midX = midX.toFixed(2);
            midY = midY.toFixed(2);
            container.textContent = `The Midpoint of Point A (${z1}, ${z2}) and Point B (${z3}, ${z4}) is (${midX}, ${midY})!`;
            box1.value = "";
            box2.value = "";
            box3.value = "";
            box4.value = "";
        }else{
            alert1("Inc")
            box1.value = "";
            box2.value = "";
            box3.value = "";
            box4.value = "";
        }
    }else{
        alert1("Inc")
        box1.value = "";
            box2.value = "";
            box3.value = "";
            box4.value = "";
    }
}
buttonMid.addEventListener('click', function () {
    let midx1 = x1Mid.value;
    let midx2 = x2Mid.value;
    let midy1 = y1Mid.value;
    let midy2 = y2Mid.value;
    midpointCalculator(midx1, midx2, midy1, midy2, containerMid, x1Mid, x2Mid, y1Mid, y2Mid)
})
//Distance between 2 points
const x1Dist = document.getElementById('distx1');
const x2Dist = document.getElementById('distx2');
const y1Dist = document.getElementById('disty1');
const y2Dist = document.getElementById('disty2');
const buttonDist = document.getElementById('distanceButton');
const containerDist = document.getElementById('distanceContainer');
function distanceCalculator (val1, val2, val3, val4, container, box1, box2, box3, box4) {
    if (isNumber(val1, val2)) {
        if(isNumber(val3, val4)) {
            let z1 = Number(val1);
            let z2 = Number(val2);
            let z3 = Number(val3);
            let z4 = Number(val4);
            let distX = (z2-z1) ** 2;
            let distY = (z4-z3) ** 2;
            let result = Math.sqrt(distX+distY);
            result = result.toFixed(2);
            container.textContent = `The Distance Between of Point A (${z1}, ${z2}) and Point B (${z3}, ${z4}) is ${result}`;
            box1.value = "";
            box2.value = "";
            box3.value = "";
            box4.value = "";
        }else{
            alert1("Inc")
            box1.value = "";
            box2.value = "";
            box3.value = "";
            box4.value = "";
        }
    }else{
        alert1("Inc")
        box1.value = "";
            box2.value = "";
            box3.value = "";
            box4.value = "";
    }
}
buttonDist.addEventListener('click', function() {
    let distx1 = x1Dist.value;
    let distx2 = x2Dist.value;
    let disty1 = y1Dist.value;
    let disty2 = y2Dist.value;
    distanceCalculator(distx1, distx2, disty1, disty2, containerDist, x1Dist, x2Dist, y1Dist, y2Dist)
})
//Sine Calculator
const sinPerp = document.getElementById('sinPerp');
const sinHyp = document.getElementById('sinHyp');
const sinButton = document.getElementById('sinButton');
const sinContainer = document.getElementById('sinContainer');
function sincalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)){
            let y1 = Number(val1);
            let y2 = Number(val2);
            if (y2 > y1) {
            let result = y1/y2;
            result = result.toFixed(2);
            container.textContent = `The Sine θ value of Perpendicular ${y1} and Hypotenuse ${y2} is sinθ = ${result} !`;
            box1.value = "";
            box2.value = "";
            }else{
                alert("Hypotenuse Shall be greater than perpendicular and base Sussy baka!")
            }
    }else{
        alert1("Inc")
    }
}
sinButton.addEventListener('click', function() {
    let sinB = sinPerp.value;
    let sinC = sinHyp.value;
    sincalculator(sinB,sinC,sinContainer,sinPerp,sinHyp)
})
//Cosine Calculator
const cosBase = document.getElementById('cosBase');
const cosHyp = document.getElementById('cosHyp');
const cosButton = document.getElementById('cosButton');
const cosContainer = document.getElementById('cosContainer');
function cosCalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)){
            let y1 = Number(val1);
            let y2 = Number(val2);
            if (y2 > y1) {
            let result = y1/y2;
            result = result.toFixed(2);
            container.textContent = `The Cosine θ value of Base ${y1} and Hypotenuse ${y2} is tanθ = ${result} !`;
            box1.value = "";
            box2.value = "";
            }else{
                alert("Hypotenuse Shall be greater than perpendicular and base Sussy baka!")
            }
    }else{
        alert1("Inc")
    }
}
cosButton.addEventListener('click', function() {
    let cosA = cosBase.value;
    let cosC = cosHyp.value;
    cosCalculator(cosA,cosC,cosContainer,cosBase,cosHyp)
})
//Tangent Calculator
const tanBase = document.getElementById('tanBase');
const tanPerp = document.getElementById('tanPerp');
const tanButton = document.getElementById('tanButton');
const tanContainer = document.getElementById('tanContainer');
function tanCalculator(val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)){
            let y1 = Number(val1);
            let y2 = Number(val2);
            let result = y1/y2;
            result = result.toFixed(2);
            container.textContent = `The Cosine θ value of Perpendicular ${y1} and Base ${y2} is tanθ = ${result} !`;
            box1.value = "";
            box2.value = "";
        
    }else{
        alert1("Inc")
    }
}
tanButton.addEventListener('click', function() {
    let tanB = tanPerp.value;
    let tanA = tanBase.value;
    tanCalculator(tanB,tanA,tanContainer,tanBase,tanPerp)
})
//Theta Calculator
const thetaAngle = document.getElementById('thetaAngle');
const thetaButton = document.getElementById('thetaButton');
const thetaContainerSin = document.getElementById('thetaContainerSin');
const thetaContainerCos = document.getElementById("thetaContainerCos");
const thetaContainerTan = document.getElementById('thetaContainerTan');
function thetaCalculator (val1, container1, container2, container3, box1) {
    if(isNumber(val1, "1")) {
        let y1 = Number(val1);
        if (y1 <= 90) {
        let y1Rad = y1*Math.PI/180;
        let sin = Math.sin(y1Rad);
        let cos = Math.cos(y1Rad);
        let tan = Math.tan(y1Rad);
        sin = sin.toFixed(2);
        cos = cos.toFixed(2);
        tan = tan.toFixed(2);
        container1.textContent = `The Sin Value of Angle ${y1} is ${sin}!`;
        container2.textContent = `The Cos Value of Angle ${y1} is ${cos}!`;
        container3.textContent = `The Tan Value of Angle ${y1} is ${tan}!`;
        box1.value = "";
        }else{
            alert("The Angle cant be greater than 90!")
        }
    }
}
thetaButton.addEventListener('click', function () {
    let thetaAng = thetaAngle.value;
    thetaCalculator(thetaAng, thetaContainerSin, thetaContainerCos, thetaContainerTan, thetaAngle)
})
//Tan Inverse or maybe Angle from opposite and Adjacent
const tanInvPerp = document.getElementById('tanInvPerp');
const tanInvBase = document.getElementById('tanInvBase');
const tanInvButton = document.getElementById('tanInvButton');
const tanInvContainer = document.getElementById('tanInvContainer');
function tanInvCalculator (val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        let result = Math.atan(y1/y2)*180/Math.PI;
        result = result.toFixed(2);
        container.textContent = `The angle from Perpendicular [Opposite ]${y1} and Base [Adjacent] ${y2} is ${result}!`;
        box1.textContent = "";
        box2.textContent = "";
    }else{
        alert1("Inc")
    }
}
tanInvButton.addEventListener('click', function () {
    let tanInvP = tanInvPerp.value;
    let tanInvB = tanInvBase.value;
    tanInvCalculator(tanInvP,tanInvB, tanInvContainer, tanInvPerp, tanInvBase)
})
//Sin Inverse or maybe Angle from Opposite and Hypotenuse
const sinInvPerp = document.getElementById('sinInvPerp');
const sinInvHyp = document.getElementById('sinInvHyp');
const sinInvButton = document.getElementById('sinInvButton');
const sinInvContainer = document.getElementById('sinInvContainer');
function sinInvCalculator (val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2>y1) {
        let result = Math.asin(y1/y2)*180/Math.PI;
        result = result.toFixed(2);
        container.textContent = `The angle from Perpendicular [Opposite] ${y1} and Hypotenuse [c] ${y2} is ${result}!`;
        box1.textContent = "";
        box2.textContent = "";
        }else{
            alert("The Hypotenuse cant be smaller than Base and Perpendicular")
        }
    }else{
        alert1("Inc")
    }
}
sinInvButton.addEventListener('click', function () {
    let sinInvP = sinInvPerp.value;
    let sinInvH = sinInvHyp.value;
    sinInvCalculator(sinInvP,sinInvH, sinInvContainer, sinInvPerp, sinInvHyp)
})
//Cos Inverse or maybe Angle from Adjacent And Hypotenuse
const cosInvBase = document.getElementById('cosInvBase');
const cosInvHyp = document.getElementById('cosInvHyp');
const cosInvButton = document.getElementById('cosInvButton');
const cosInvContainer = document.getElementById('cosInvContainer');
function cosInvCalculator (val1, val2, container, box1, box2) {
    if (isNumber(val1, val2)) {
        let y1 = Number(val1);
        let y2 = Number(val2);
        if (y2>y1) {
        let result = Math.acos(y1/y2)*180/Math.PI;
        result = result.toFixed(2);
        container.textContent = `The angle from Base [Adjacent] ${y1} and Hypotenuse [c] ${y2} is ${result}!`;
        box1.textContent = "";
        box2.textContent = "";
        }else{
            alert("The Hypotenuse cant be smaller than Base and Perpendicular")
        }
    }else{
        alert1("Inc")
    }
}
cosInvButton.addEventListener('click', function () {
    let cosInvB = cosInvBase.value;
    let cosInvH = cosInvHyp.value;
    cosInvCalculator(cosInvB,cosInvH, cosInvContainer, cosInvBase, cosInvHyp)
})