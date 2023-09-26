const str1 = 'aaaaa bbbb ccc bbddd aaabbbaaaaa bbaaaabaa a aaa'; // первинний массив
const blacklist = ['aa', 'bb', 'dd']; // массив  якому комплекти символів для заміни у первинному массиві
const zamena = '**%'; //символи на які маємо замінити символи у первинному массиві

let rez = str1; // переприсвоєння - використовуємо змінну для маніпуляцій з константою та отримання бажаного результату


for (let i=0; i < blacklist.length; i++){

    let count = 0; // йде обнулення для наступного використання циклу вайл

    while(count != -1){

        count = rez.indexOf(blacklist[i], count+1); // здвиг пошуку замінних символів

        rez = rez.replace(blacklist[i], zamena); // заміна символів на необхідні

    }

}

console.log(rez);
