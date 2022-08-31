const x1f = document.getElementById("x1");
const x1in = document.getElementById("x1in");
const x2f = document.getElementById("x2");
const x2in = document.getElementById("x2in");
const y1f = document.getElementById("y1");
const y1in = document.getElementById("y1in");
const y2f = document.getElementById("y2");
const y2in = document.getElementById("y2in");
const sqf = document.getElementById("sqf");

const btn1 = document.getElementById("btn1");

const hun = document.getElementById("hun");
const kath = document.getElementById("kath");
const big = document.getElementById("big");
const acr = document.getElementById("acre");


const areaXMeanValue = () => {
    var in11 = x1f.value;
    var in12 = x1in.value;
    var inchToFeet1 = parseFloat((in12/12).toFixed(2));
    var totalX1length = (parseFloat(in11) + parseFloat(inchToFeet1));
    
    var in21 = x2f.value;
    var in22 = x2in.value;
    var inchToFeet2 = parseFloat((in22/12).toFixed(2));
    var totalX2length = (parseFloat(in21) + parseFloat(inchToFeet2));
    
    var meanXlength = ((parseFloat(totalX1length) + parseFloat(totalX2length))/2);
    
    return  meanXlength;
};
const areaYMeanValue = () => {
    var in31 = y1f.value;
    var in32 = y1in.value;
    var inchToFeet3 = parseFloat((in32/12).toFixed(2));
    var totalY1length = (parseFloat(in31) + parseFloat(inchToFeet3));
    
    var in41 = y2f.value;
    var in42 = y2in.value;
    var inchToFeet4 = parseFloat((in42/12).toFixed(2));
    var totalY2length = (parseFloat(in41) + parseFloat(inchToFeet4));
    
    var meanYlength = ((parseFloat(totalY1length) + parseFloat(totalY2length))/2);
    
    return  meanYlength;
};

const feetValue = () => {
    var x = areaXMeanValue();
    var y = areaYMeanValue();
    // var values = parseFloat((parseFloat(x) * parseFloat(y))).toFixed(2);;
    var values = parseFloat(x * y).toFixed(2);
    
    return values;
};

const feetResult = () => {
    let amInFeet = feetValue();
    return sqf.textContent = (amInFeet);
};

const hundredResult = () => {
    
    const feetValues = feetValue();
    const hundreds = parseFloat((feetValues/435.60).toFixed(2));
   
    return hun.textContent = (hundreds);
};
const kathaResult = () => {
    
    const feetValues = feetValue();
    const kathas = parseFloat((feetValues/720).toFixed(2));
    
    return kath.textContent = (kathas);
};
const bighaResult = () => {
    
    const feetValues = feetValue();
    const kathas = parseFloat((feetValues/720).toFixed(2));
    const bighas = parseFloat((kathas/20).toFixed(2));
    
    return big.textContent = (bighas);
};
const acreResult = () => {
    
    const feetValues = feetValue();
    const kathas = parseFloat((feetValues/720).toFixed(2));
    const bighas = parseFloat((kathas/20).toFixed(2));
    const acres = parseFloat((bighas/1.6).toFixed(2));

    return acr.textContent = (acres);
};


btn1.addEventListener('click', (e) => {
    feetResult();
    hundredResult();
    kathaResult();
    bighaResult();
    acreResult();
    e.preventDefault();
});
