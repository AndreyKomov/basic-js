class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("A correct parameters ae needed!");
    };

    let alphabet = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
    };

    let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

    let checkObj = {
      "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "",
      "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": "",
    };     //object for check letters or non-letters simbols in message string

    let messageArr = message.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");

    let indexArr = 0;
    let keyArrSpaces = messageArr.map((el, i) => {              //aray from key word with spaces
      if (checkObj.hasOwnProperty(el)) {
        if (indexArr >= keyArr.length) {
          indexArr = 0;
        };
        indexArr++;
        return keyArr[indexArr - 1];
      } else {
        return el;
      };
    });

    let resultArr = [];
    for (let i = 0; i < messageArr.length; i++) {                   //result number (index of cipher letters) array 
      if (checkObj.hasOwnProperty(messageArr[i])) {
        let resultLetter = (alphabetArr.indexOf(messageArr[i]) + alphabetArr.indexOf(keyArrSpaces[i]));
        if (resultLetter > 25) {
          resultLetter = resultLetter - 26;
        }
        resultArr.push(resultLetter);
      } else {
        resultArr.push(messageArr[i]);
      }
    };

    let resultArrSecond = resultArr.map(el => {                 //result cipher array
      if (typeof (el) === "number") {
        el = alphabet[el];
      } else {
        el = el;
      }
      return el;
    });

    if (this.mode) {
      return resultArrSecond.join("");
    } else {
      return resultArrSecond.reverse().join("");
    };

  };

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("A correct parameters ae needed!");
    };

    let alphabet = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
    };

    let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

    let checkObj = {
      "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "",
      "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": "",
    };     //object for check letters or non-letters simbols in message string

    let messageArr = message.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");

    let indexArr = 0;
    let keyArrSpaces = messageArr.map((el, i) => {              //aray from key word with spaces
      if (checkObj.hasOwnProperty(el)) {
        if (indexArr >= keyArr.length) {
          indexArr = 0;
        };
        indexArr++;
        return keyArr[indexArr - 1];
      } else {
        return el;
      };
    });

    let resultArr = [];
    for (let i = 0; i < messageArr.length; i++) {                   //result number (index of cipher letters) array 
      if (checkObj.hasOwnProperty(messageArr[i])) {
        let resultLetter = (alphabetArr.indexOf(messageArr[i]) + 26 - alphabetArr.indexOf(keyArrSpaces[i]));
        if (resultLetter > 25) {
          resultLetter = resultLetter - 26;
        }
        resultArr.push(resultLetter);
      } else {
        resultArr.push(messageArr[i]);
      }
    };

    let resultArrSecond = resultArr.map(el => {                 //result cipher array
      if (typeof (el) === "number") {
        el = alphabet[el];
      } else {
        el = el;
      }
      return el;
    });

    if (this.mode) {
      return resultArrSecond.join("");
    } else {
      return resultArrSecond.reverse().join("");
    }
  };

}

module.exports = VigenereCipheringMachine;
