/*
Palindroma

- Chiedere all’utente di inserire una parola tramite un form.
- Creare una funzione per capire se la parola inserita è palindroma.
*/

//---------------------------------------------------------------

/*
1- prendo gli elementi dal DOM.
2- aggiungo event listener al bottone.
3- prendo il value dell'input.
4- creo una funzione che ribalti la parola scritta dall'utente e controlla se la parola ribaltata è uguale all'originale.
5a- se si (vero), la parola è palindroma.
5b- se no(falso), la parola non è palindroma. 
6- stampo il risultato in pagina.
*/

//---------------------------------------------------------------

// prendo gli elementi dal DOM

const inputWord = document.getElementById("word");
const checkButton = document.getElementById("check-btn");
const targetElement = document.getElementById("target");

// aggiungo event listener al bottone

checkButton.addEventListener("click", function () {
  // prendo il value dell'input
  const userWord = inputWord.value.trim();
  console.log(userWord);
});

// creo una funzione che ribalti la parola scritta dall'utente e controlla se la parola ribaltata è uguale all'originale.

function isPalindrome(word) {
  // ribalto la parola
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  // controllo se la parola ribaltata è uguale all'originale
  let isEqual = false;
  if (reverseWord === word) {
    isEqual = true;
  }
  return isEqual;
}
