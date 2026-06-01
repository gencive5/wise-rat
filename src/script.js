export default class rat {

constructor() {

const fortune1 = "yes"
const fortune2 = "no"
const fortune3 = "maybe"
const fortune4 = "idk"
const fortune5 = "ummmmm"
const fortune6 = "uhhhhhhh"
const fortune7 = "perhaps"
const fortune8 = "why not"
const fortune9 = "What am I supposed to do"
const fortune10 = "sure"
const fortune11 = "Ew"
const fortune12 = "eh"
const fortune13 = "yup"
const fortune14 = "Nah"
const fortune15 = "ok"
const fortune16 = "definitely"
const fortune17 = "absolutely not"
const fortune18 = "..."
const fortune19 = "yay"
const fortune20 = "nope"
const fortune21 = "I guess"
const fortune22 = "I think that's fine"
const fortune23 = "oooof"
const fortune24 = "¯\(ツ)/¯"

const randomNumber = Math.floor(Math.random() * 24) + 1


let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
  } else if (randomNumber === 2){
  selectedFortune = fortune2;
  } else if (randomNumber === 3){
  selectedFortune = fortune3;
  } else if (randomNumber === 4){
  selectedFortune = fortune4;
  } else if (randomNumber === 5){
  selectedFortune = fortune5;
  } else if (randomNumber === 6){
  selectedFortune = fortune6;
  } else if (randomNumber === 7){
  selectedFortune = fortune7;
  } else if (randomNumber === 8){
  selectedFortune = fortune8;
  } else if (randomNumber === 9){
  selectedFortune = fortune9;
  } else if (randomNumber === 10){
  selectedFortune = fortune10;
  } else if (randomNumber === 11){
  selectedFortune = fortune11;
  } else if (randomNumber === 12){
  selectedFortune = fortune12;
  } else if (randomNumber === 13){
  selectedFortune = fortune13;
   } else if (randomNumber === 14){
  selectedFortune = fortune14;
  } else if (randomNumber === 15){
  selectedFortune = fortune15;
  } else if (randomNumber === 16){
  selectedFortune = fortune16;
  } else if (randomNumber === 17){
  selectedFortune = fortune17;
  } else if (randomNumber === 18){
  selectedFortune = fortune18;
   } else if (randomNumber === 19){
  selectedFortune = fortune19;
  } else if (randomNumber === 20){
  selectedFortune = fortune20;
  } else if (randomNumber === 21){
  selectedFortune = fortune21;
  } else if (randomNumber === 22){
  selectedFortune = fortune22;
  } else if (randomNumber === 23){
  selectedFortune = fortune23;
  } else if (randomNumber === 24){
  selectedFortune = fortune24;}

  console.log(selectedFortune)
}
}