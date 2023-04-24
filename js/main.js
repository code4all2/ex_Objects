function pegarInfos() {

    const form = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    const pessoa = [];

    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    // }

    function recebeEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        /**
         * RESOLUÇÃO AQUI EMBAIXO
         */
        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoa);
    
        /**
         * 
         * Imprime na div
         */
    
        resultado.innerHTML += ` 
        <p> ${nome.value} </p>
        <p> ${sobrenome.value} </p>
        <p> ${peso.value} </p>
        <p> ${altura.value} </p>
    
        `
    }



    form.addEventListener('submit', recebeEvento);

}

pegarInfos();