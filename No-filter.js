function onlyOdds(numArray) {
  let odds = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 1) {
      odds.push(numArray[i]);
    }
  }
  return odds;
}

function onlyEvens(numArray) {
  let even = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      even.push(numArray[i]);
    }
  }
  return even;
}

function shortNamesOnly(names) {
  let shortNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < 7) {
      shortNames.push(names[i]);
    }
  }
  return shortNames;
}

function sNames(names) {
  let sNames = [];
  for (i = 0; i < names.length; i++) {
    if (names[i][0] === "S") {
      sNames.push(names[i]);
    }
  }
  return sNames;
}
