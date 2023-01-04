/* eslint-disable max-len */
export function ruleCheck(x, y) {
  if(y.charAt(0).toLowerCase() !== x.charAt(x.length - 1).toLowerCase()) {
    return false;
  } else {
    return true;
  }
}

export function euroRuleCheck(x, y) {
  const a = x.normalize('NFD').replace(/\p{Diacritic}/gu, '');
  const b = y.normalize('NFD').replace(/\p{Diacritic}/gu, '');
  return ruleCheck(a, b);
}

//Consider that 'キュ' equates to 'ユ' based on current ruleset
export function jpRuleCheck(x, y) {
  let letter = x.charAt(x.length - 1);
  if(letter === 'ー') {
    letter = x.charAt(x.length - 2);
  }
  if(y.charAt(0) !== letter) {
    return false;
  } else {
    return true;
  }
}

//works within test, not within game
export function jpLoss(n) {
  const letter = n.charAt(n.length - 1);
  if(letter === 'ン') {
    return true;
  } else {
    return false;
  }
}

export function checkDictionary(word, dictionary) {
  if(dictionary.includes(word.toLowerCase())) {
    return true;
  } else {
    console.log('Not an accepted word');
    return false;
  }
}

export function checkRepeats(word, wordList) {
  if(!wordList.includes(word)) {
    return true;
  } else {
    console.log('Word has already been said, try again');
    return false;
  }
}

export function checkTimer(count) {
  if(count === 0) {
    return true;
  } else {
    return false;
  }
}

//need to figure out how to translate across language options
export function scoreCritic(wordList) {
  if(wordList.length < 5) {
    return 'Rank: Bug-Catcher.  Stick to Route 1 kid!';
  } else if(5 < wordList.length < 15) {
    return 'Rank: Pokemon Trainer.  Not bad, keep at it!';
  } else if(15 < wordList.length) {
    return 'Rank: Gym Leader.  You\'ve definitely done some battling!';
  } else if(20 < wordList.length) {
    return 'Rank: Pokemon Professor.  You know your Pokemon!';
  }
}

export function remainingOptions(wordList, dictionary) {
  const word = wordList.length - 1;
  const letter = wordList[word].charAt(wordList[word].length - 1);
  const usedWords = new Set(wordList);
  const availableWords = dictionary.filter(x => !usedWords.has(x));

  const remainingWords = availableWords.filter(x => x.charAt(0) === letter);

  if(remainingWords.length > 0) {
    return remainingWords.length;
  } else {
    return false;
  }
}
