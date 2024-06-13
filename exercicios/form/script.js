function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEvento (evento) {
        evento.preventDefault();
        console.log("ok");

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        const pessoa = [nome.value, sobrenome.value, peso.value, altura.value];
        console.log(pessoa);
        
        resultado.innerHTML += `<p>${pessoa}</br></p>`;
    };

    form.addEventListener('submit', recebeEvento);

};

meuEscopo();