const escolheDay = (day) => {
    if (day == 0) {
        day = "Domingo";
    } else if (day == 1) {
        day = "Segunda-feira";
    } else if (day == 2) {
        day = "Terça-feira";
    }  else if (day == 3) {
        day = "Quarta-feira";
    } else if (day == 4) {
        day = "Quinta-feira";
    } else if (day == 5) {
        day = "Sexta-feira";
    } else if (day == 6) {
        day = "Sabado";
    };

    return day;
};

const escolheMonth = (month) => {
    if (month == 1) {
        month = "Janeiro";
    } else if (month == 2) {
        month = "Fevereiro";
    } else if (month == 3) {
        month = "Março";
    } else if (month == 4) {
        month = "Abril";
    } else if (month == 5) {
        month = "Maio";
    } else if (month == 6) {
        month = "Junho";
    } else if (month == 7) {
        month = "Julho";
    } else if (month == 8) {
        month = "Agosto";
    } else if (month == 9) {
        month = "Setembro";
    } else if (month == 10) {
        month = "outubro";
    } else if (month == 11) {
        month = "Novembro";
    } else if (month == 12) {
        month = "Dezembro";
    };

    return month;
};

const formataData = (data) => {
    const dayW = escolheDay(data.getDay());
    const dayM = data.getDate();
    const month = escolheMonth(data.getMonth() + 1);
    const year = data.getFullYear();
    const hour = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
    const minute = data.getMinutes();

    // console.log(`${dayW}, ${dayM} de ${month} de ${year} ${hour}:${minute}`);
    return `${dayW}, ${dayM} de ${month} de ${year} ${hour}:${minute}`;
};

const data = new Date();

const p = document.createElement('p');
p.innerHTML = formataData(data)
const container = document.querySelector('.container');
container.appendChild(p);