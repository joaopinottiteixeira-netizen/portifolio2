function aleatorio() {
    let min = 1;
    let max = 20;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    
    if (num === 17) {
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>${num} minecraft foi feito 17 anos atra pensar que o tempo voa tão rapido  </p>`;
    }

     if (num === 18) {
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>${num} 18 anos ja ta na idade pra jogar o mod da jenny </p>`;

    }    
    
    else{
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>acabei de pensar o numero ${num}.</p>`;
        

}



}