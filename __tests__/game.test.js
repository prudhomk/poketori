/* eslint-disable max-len */
import { ruleCheck, euroRuleCheck, jpRuleCheck, jpLoss, checkDictionary, checkRepeats, checkTimer, remainingOptions } from '../src/components/utilities/rules.js';
import { Pokemon } from '../src/data/pokemon.js';
import { ポケモン } from '../src/data/ポケモン.js';
import { french } from '../src/data/pokemonRude.js';
import { deutch } from '../src/data/deutchmon.js';
import { 포켓몬을 } from '../src/data/포켓몬을.js';

//re-write to specify pokemon, no need for dictionary function

describe('ruleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter', () => {
    const x = 'charmander';
    const y = 'rockruff';
    const z = 'mewtwo';
    expect(ruleCheck(x, y)).toEqual(true);
    expect(ruleCheck(x, z)).toEqual(false);
  });

});

describe('euroRuleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter', () => {
    const x = 'bébécaille';
    const y = 'écaïd';
    const z = 'mewtwo';
    expect(euroRuleCheck(x, y)).toEqual(true);
    expect(euroRuleCheck(x, z)).toEqual(false);
  });

});

describe('jpRuleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter, edge case for extended characters', () => {
    const x = 'ラクダ';
    const y = 'ダルマー';
    const z = 'マカロニ';
    expect(jpRuleCheck(x, y)).toEqual(true);
    expect(jpRuleCheck(y, z)).toEqual(true);
    expect(jpRuleCheck(x, z)).toEqual(false);
  });
});

describe('checkDictionary(string, dictionary)', () => {
  test('checks if word is in category dicitionary', () => {
    const x = 'bulbasaur';
    const y = 'agumon';
    const z = 'goldeen';
    expect(checkDictionary(x, Pokemon)).toEqual(true);
    expect(checkDictionary(y, Pokemon)).toEqual(false);
    expect(checkDictionary(z, Pokemon)).toEqual(true);
  });
});

describe('checkJP', () => {
  test('checks if jp dictinary works', () => {
    const x = 'ピカチュウ';
    const y = 'bulbasaur';
    const z = 'ズガドーン';
    expect(checkDictionary(x, ポケモン)).toEqual(true);
    expect(checkDictionary(y, ポケモン)).toEqual(false);
    expect(checkDictionary(z, ポケモン)).toEqual(true);
  });
});

describe('checkFR', () => {
  test('checks if french dictinary works', () => {
    const x = 'meowth';
    const y = 'salamèche';
    const z = 'pikachu';
    expect(checkDictionary(x, french)).toEqual(false);
    expect(checkDictionary(y, french)).toEqual(true);
    expect(checkDictionary(z, french)).toEqual(true);
  });
});

describe('checkDE', () => {
  test('checks if deutch dictinary works', () => {
    const x = 'schiggy';
    const y = 'smogmog';
    const z = 'beedrill';
    expect(checkDictionary(x, deutch)).toEqual(true);
    expect(checkDictionary(y, deutch)).toEqual(true);
    expect(checkDictionary(z, deutch)).toEqual(false);
  });
});

describe('checkRepeats(string, wordList)', () => {
  test('checks if a word has been said', () => {
    const words = ['apple', 'eggplant', 'chive'];
    const x = 'apple';
    const y = 'banana';

    expect(checkRepeats(x, words)).toEqual(false);
    expect(checkRepeats(y, words)).toEqual(true);
  });
});

describe('checkTimer(count)', () => {
  test('checks if timer has run out', () => {
    const clock = 1;
    const timer = 0;

    expect(checkTimer(clock)).toEqual(false);
    expect(checkTimer(timer)).toEqual(true);
  });
});

describe('simulates a game: check if word is in dictionary, add to state, check if next word is in dictionary and follows rules', () => {
  test('game test', () => {
    const gameArr = ['charmander'];
    const words = ['egg', 'rockruff', 'butterfree', 'squirtle'];
    for(let i = 0; i < words.length; i++) {

      if(ruleCheck(gameArr[0], words[i]) && checkDictionary(words[i], Pokemon) && checkRepeats(words[i], gameArr)) {
        gameArr.push(words[i]);
      } else {
        console.log('Rules have been broken');
      }
    }
    expect(gameArr).toEqual(['charmander', 'rockruff']);
  });
});

describe('checks if there are any words available', () => {
  test('remainingOptions test', () => {

    const words = ['charmander', 'rockruff'];
    const words2 = ['metapod', 'donphan', 'noibat', 'torterra'];
    const words3 = ['treeko', 'omastar', 'rapidash'];


    expect(remainingOptions(words, Pokemon)).toEqual(39);
    expect(remainingOptions(words2, Pokemon)).toEqual(44);
    expect(remainingOptions(words3, Pokemon)).toEqual(33);
  });
});

describe('testing jp game loss condition on n character', () => {
  test('check if word triggers loss condition', () => {
    const x = 'ピカチュウ';
    const y = 'アカン';
    const z = 'リザルドン';

    expect(jpLoss(x)).toEqual(false);
    expect(jpLoss(y)).toEqual(true);
    expect(jpLoss(z)).toEqual(true);
  });
});
