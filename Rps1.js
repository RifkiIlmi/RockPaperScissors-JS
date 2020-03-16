function getPilihanCom() {
    const com = Math.random();
    if (com < 0.34) return 'rock';
    if(com > 0.34 && com < 0.67) return 'paper';
    return 'scissors';
}

function getHasil(com, player) {
    if (player == com ) return 'Seri!';
    if (player == 'rock')return (com == 'paper') ? 'Kalah!' : 'Menang!';
    if (player == 'paper') return (com == 'rock') ? 'Menang!' : 'Kalah!' ;
    if (player == 'scissors') return (com == 'paper') ? 'Menang!' : 'Kalah!' ;
}

//fungsi putar
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['rock','paper','scissors'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src' , 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i =0; 
    },100)
}

//cara 1

// const pRock = document.querySelector('.rock');
// pRock.addEventListener('click', function () {
//     const pilihanCom = getPilihanCom();
//     const pilihanPlayer = pRock.className;
//     const hasil = getHasil(pilihanCom,pilihanPlayer);

//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/'+ pilihanCom + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

//cara 2
const pilihanImg = document.querySelectorAll('li img');
pilihanImg.forEach(function (img) {
    img.addEventListener('click', function () {
        const pilihanCom = getPilihanCom();
        const pilihanPlayer = img.className;
        const hasil = getHasil(pilihanCom,pilihanPlayer);
        
        putar();

        setTimeout(function () {    
            const imgCom = document.querySelector('.img-komputer');
            imgCom.setAttribute('src', 'img/'+ pilihanCom + '.png');
        
            const info = document.querySelector('.info');
            info.innerHTML = hasil;            
        }, 1000);
    });
});