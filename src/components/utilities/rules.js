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
  return (letter === 'ン');
}

export function checkDictionary(word, dictionary) {
  if(dictionary.includes(word.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

export function checkRepeats(word, wordList) {
  if(!wordList.includes(word)) {
    return true;
  } else {
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
//instead of phrases, use image (either pokemon, trainers, or medals)
export function scoreCritic(wordList) {
  if(wordList.length < 5) {
    return 'bugcatcher';
  } else if(5 < wordList.length < 15) {
    return 'Rank: Pokemon Trainer.  Not bad, keep at it!';
  } else if(15 < wordList.length) {
    return 'Rank: Gym Leader.  You\'ve definitely done some battling!';
  } else if(20 < wordList.length) {
    return 'scientist';
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

//sourced from https://phrase.com/blog/posts/detecting-a-users-locale/
export function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: false,
  };

  const opt = {
    ...defaultOptions,
    ...options,
  };

  const browserLocales =
    navigator.languages === undefined

      ? [navigator.language]

      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map(locale => {

    const trimmedLocale = locale.trim();
    console.log(trimmedLocale);
    return opt.languageCodeOnly

      ? trimmedLocale.split(/-|_/)[0]

      : trimmedLocale;

  });
}
