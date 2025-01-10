
const prompt = require("prompt-sync")();

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
const scelta = prompt(`
+add
-Sub
*Mul
/div
`);
const op1 = number(prompt("primo operando : "));
const op2 = number(prompt("secondo operando: "));
const res = null;

switch(scelta){
case `+`:
    res = add(op1, op2);
    console.log(`${op1} + ${op2} = ${res}`);
    break;
case `-`:
    res = sub(op1, op2);
    console.log(`${op1} - ${op2} = ${res}`);
    break;
case `*`:
    res = mul(op1, op2);
    console.log(`${op1} * ${op2} = ${res}`);
    break;
case `/`:
    res = div(op1, op2);
    console.log(`${op1} / ${op2} = ${res}`);
    break;
}