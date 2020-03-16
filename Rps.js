let tanya = true;
while(tanya){
    //pilihan user
    let player = prompt('pilihan Kamu : rock, paper, scissors');

    //pilhan komputer dengan Math.Random()

    // // cara 1
    // let com = Math.round(Math.random() * 3 + 1);
    // if (com == 1) {
    //     com = 'rock';
    // } else if(com == 2) {
    //     com = 'paper';
    // } else{
    //     com = 'scissors';
    // }

    // cara 2

    let com = Math.random();

    if (com < 0.34) {
        com = 'rock';
    } else if(com > 0.34 && com < 0.67) {
        com = 'paper';
    } else{
        com = 'scissors';
    }

    //Peraturan nya
    let hasil = '';

    if (player == com ) {
        hasil = 'Seri!';
    } else if (player == 'rock') {
        // if (com == 'paper') {
        //     hasil = 'Kalah!';
        // } else {
        //     hasil = 'Menang!';
        // }
        hasil = (com == 'paper') ? 'Kalah!' : 'Menang!';
    }else if(player == 'paper'){
        hasil = (com == 'rock') ? 'Menang!' : 'Kalah!' ;
    }else if (player == 'scissors'){
        hasil = (com == 'paper') ? 'Menang!' : 'Kalah!' ;
    }else{
        hasil = 'ERROR!!!';
    }

    prompt('Kamu memilih : '+player+' dan Komputer memilih : '+com+' \nHasil : '+hasil);

    tanya = confirm('Ingin Bermain Lagi?');
}

alert('Terimakasih Sudah Bermain');