// creo un array con le email autorizzate

const autorizedEmail = ['pippo@gmail.com' , 'pippo@hotmail.it' , 'pippo@boolean.com'];

console.log('autorizedEmail' , autorizedEmail , autorizedEmail.length , typeof autorizedEmail);


//stampo in console quello che inserisce l'utente nell'input
let userEmail;

const myButton = document.querySelector('button');
myButton.addEventListener('click', function() {


    //qua vorrei mettere ciò che ho scritto da riga 25 a riga 35

    let userEmail = document.getElementById('mail').value;

    console.log('mail' , userEmail);

})



let i ;

for (let i = 0 ; i < autorizedEmail.length ; i++){
  if (userEmail === autorizedEmail[i]){

      console.log('corretto!', userEmail);

  }


}

   

