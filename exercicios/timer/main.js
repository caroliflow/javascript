const mostra = document.querySelector('.mostra');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');

const formataData = (seg) => {
    const date = new Date(seg * 1000);

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

let seg = 0;
let timer;

const startTimer = () => {
    timer = setInterval(function () {
        seg++;
        mostra.innerHTML = formataData(seg);
    }, 1000);
};

document.addEventListener('click', function(e) {
    const button = e.target;

    if (button.classList.contains('start')) {
        startTimer();
    };

    if (button.classList.contains('pause')) {
        clearInterval(timer);
    };

    if (button.classList.contains('stop')) {
        clearInterval(timer);
        seg = 0;
        mostra.innerHTML = "00:00:00";
    };
});

 