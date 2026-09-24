  
function calcular() {
  nota1trim = Number(prompt("digita a notado primeiro triestre"));
  nota2trim = Number(prompt("digita nota do segundo trimestre:"));

   resultado = 180 - (nota1trim + nota2trim);

  if(resultado <= 0){
        alert("Parabéns!você esta aprovado.");
    } else {
        alert("você ainda precisa tirar " + resultado + " no terceiro trim");
    }   
}
