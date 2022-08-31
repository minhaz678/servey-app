const x1f = document.getElementById("x1");
const x1in = document.getElementById("x1in");
const x2f = document.getElementById("x2");
const x2in = document.getElementById("x2in");
const y1f = document.getElementById("y1");
const y1in = document.getElementById("y1in");
const y2f = document.getElementById("y2");
const y2in = document.getElementById("y2in");
const sqf = document.getElementById("sqf");
const sqr = document.getElementById("sqr");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const hun = document.getElementById("hun");
const kath = document.getElementById("kath");
const big = document.getElementById("big");
const acr = document.getElementById("acre");
const hh2 = document.getElementById("h2")


const hundredResult = () => {
    
    const feetValue = sqr.value;
    const hundreds = parseFloat((feetValue/435.60).toFixed(2));
   
    return hundreds;
}
const kathaResult = () => {
    
    const feetValue = sqr.value;
    const kathas = parseFloat((feetValue/720).toFixed(2));
    
    return kathas;
}
const bighaResult = () => {
    
    const feetValue = sqr.value;
    const kathas = parseFloat((feetValue/720).toFixed(2));
    const bighas = parseFloat((kathas/20).toFixed(2));
    
    return bighas;
}
const acreResult = () => {
    
    const feetValue = sqr.value;
    const kathas = parseFloat((feetValue/720).toFixed(2));
    const bighas = parseFloat((kathas/20).toFixed(2));
    const acres = parseFloat((bighas/1.6).toFixed(2));

    return acres;
}

const run2 = () => {
        let hundred = hundredResult();
        let katha = kathaResult();
        let bigha = bighaResult();
        let acre = acreResult();
        hun.textContent = (hundred);
        kath.textContent = (katha);
        big.textContent = (bigha);
        acr.textContent = (acre);
 
}


btn2.addEventListener("click", (e) => {
    run2()
    e.preventDefault();
});

