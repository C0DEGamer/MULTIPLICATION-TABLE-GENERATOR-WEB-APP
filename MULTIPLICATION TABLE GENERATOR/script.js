let n=prompt("Enter The Number","Any Number");
let limit=prompt("Enter The Limit","Any");
let result="";

for(let i=1;i<=limit;i++){

    result+=`${i} x ${n} = ${i*n}\n`;
}

alert(result);

const a=document.querySelector("#link");
let blob=new Blob([result],{type:"text/plain"});
let url=URL.createObjectURL(blob);
a.href=url;
a.download="Mul_table.txt"