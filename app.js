alert('Boas vindas ao jogos do numero secreto');
 /*o let é a forma de declara a variavel e guarda o valor recebido a variaveis*/
 let numeroSecreto = parseInt (Math.random() * 100);
console.log(numeroSecreto);
let chute;
let tentativas = 1

while(chute != numeroSecreto){
    chute = prompt('Escolha um numero de 1 a 100');

if(chute == numeroSecreto){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}
else{
    if(chute > numeroSecreto){
        alert(`O numero secreto e menor que ${chute}`);
    }
    else{
        alert(`O numero secreto é maior que ${chute}`);
    }
}

    tentativas++;
}    
