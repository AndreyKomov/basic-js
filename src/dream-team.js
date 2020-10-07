

module.exports = function createDreamTeam(members) {
  let letterArr =[];

  if (members instanceof Array) {                                 //check for array type
    members = members.filter(el => typeof (el) === "string");    //check elements for string type
    for (let i = 0; i < members.length; i++) {                   // the cycle for creating arrays with names only
      let nameArr = members[i].split(""); //[" ", " ", " ", "W", "a"]
      let letter = "";
      for (let j = 0; j <=nameArr.length; j++) {
        if (nameArr[j] != " ") {
          letter = nameArr[j];
          break
        }
      }
      console.log(nameArr); 

      letterArr.push(letter);
    }
    
    let newLetterArr = letterArr.map(function re (el) { 
      let newEl = el.toUpperCase();  
      return newEl; 
    } );

    return newLetterArr.sort().join("");                      //create the string with team name
  } else {
    return false;
  }
};
