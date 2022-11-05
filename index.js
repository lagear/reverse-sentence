"use strict";

function reverseWord(word) {
  let final = "";
  for (let index = word.length - 1; index >= 0; index--) {
    const element = word[index];
    final += element;
  }

  return final;
}

function reverse(sentence) {
  const final1 = reverseWord(sentence);
  ////return final1
  let final2 = "";
  const words = final1.split(" ");
  words.forEach((element) => {
    final2 += reverseWord(element) + " ";
  });

  final2 = final2.substring(0, final2.length - 1);
  return final2;
}

module.exports = reverse;
