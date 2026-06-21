// let letters = ['d', 'f', 'j', 'k', 'b', 'a', 't'];

let sentence = "";

let totalWords = prompt("Enter the total number of words");

function arr() {
  let input = document.querySelector("input").value;
  // console.log(input);
  let letters = input.trim().split(/\s+/);
  console.log(letters);

  for (let i = 0; i < totalWords; i++) {
    let word = "";
    let ranLen = Math.floor(Math.random() * 5) + 2;

    for (let j = 0; j < ranLen; j++) {
      let ranNum = Math.floor(Math.random() * letters.length);
      let ranLetter = letters[ranNum];

      word += ranLetter;
    }
    sentence = sentence + word + " ";

    // console.log(word);
  }
  let newSentence = sentence.trim();
  console.log(newSentence);
  document.querySelector("h3").innerText = newSentence;
}

// Split the input by space
// function arr() {
//     let input = document.querySelector("input").value;
//     // console.log(input);
//     let keysArray = input.trim().split(/\s+/);
//     console.log(keysArray);
// }