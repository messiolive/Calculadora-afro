let inputResultado = document.querySelector("#inputDisplayResultado");
let textAreaHistorico = document.querySelector("#textAreaHistorico");

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};
window.addEventListener("load",atribuirEventos);

function atribuirEventos(){
    document.querySelector("btnLimpar").addEventListener("click", limpadados);
    document.querySelector("btnPonto").addEventListener("click", clicarponto);
    document.querySelector("btnResultado").addEventListener("click", resultado);

    let numeros=document.querySelectorAll(".btn-numero");
    let operadores=document.querySelectorAll(".btn-operador");
for(let numero of numeros){
    numero.addEventListener("click",clicarnumero);
}


for(let operado of operadores){
  operado.addEventListener("click",clicaroperador);
}
}

function limpadados(){
  inputResultado.value="";
  inserirTexto("---");
  calculo.funcaoParaCalcular=null;
  calculo.valorSalvo=null;

}

function clicarponto(){
 if(inputResultado.value=="" || isNaN(inputResultado.value)){
  inputResultado.value="0.";

 }else if(!inputResultado.value.includes(",")){
   inputResultado.value=inputResultado.value+".";

 }
}

function resultado(){

}
function clicarnumero(){
    
}

function clicaroperador(){

}


function inserirTexto(texto){
   textAreaHistorico.textContent += texto+"\n";
   textAreaHistorico.scrollTop=textAreaHistorico.scrollHeight;
}
atribuirEventos();