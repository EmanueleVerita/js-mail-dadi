// lancio dado da parte dell'utente e del pc


let numberUser = Math.round((Math.random() * 6) + 1);

console.log('number user' , numberUser , typeof numberUser);




let numberPc = Math.round((Math.random() * 6) + 1);

console.log('number pc' , numberPc , typeof numberPc);




//confrontiamo i due numeri

let result

if(numberUser > numberPc){
    console.log('Hai vinto!!' , result , typeof result);


} else{
    console.log('Hai perso :(' , result , typeof result);
}
