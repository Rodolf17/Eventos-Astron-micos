import colecaoChuvasDeMeteoros from "./data/chuva-de-meteoros.js";
import imprimeListaDeChuvas from "./Funcoes/funcoesInterface.js";
import { chuvaDeMeteorosHoje, verificaChuvaVisivelProximos2Meses } from "./Funcoes/funcoesLogicas.js";


const dataAtual = new Date();

const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter(
    (chuva) => chuvaDeMeteorosHoje(chuva, dataAtual)
 );

const chuvasVisiveisProximos2meses = colecaoChuvasDeMeteoros.filter(
    (chuva) => verificaChuvaVisivelProximos2Meses(chuva,dataAtual)
);

console.log("Chuva de Meteoro Hoje: ");

if(chuvasVisiveisHoje.length > 0){
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length == 1 
    ? '1 chuva de meteoros que pode ser vista hoje'
    : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

    console.log(msg);

    imprimeListaDeChuvas(chuvasVisiveisHoje);
}else{
    console.log('\nNão há chuvas passando hoje');
}

console.log("\n");
console.log('CHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES');
imprimeListaDeChuvas(chuvasVisiveisProximos2meses);


// console.log('Chuva de meteoros \n');
// console.log(colecaoChuvasDeMeteoros);
