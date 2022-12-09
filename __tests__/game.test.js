/* eslint-disable max-len */
import { ruleCheck, jpRuleCheck, jpLoss, checkDictionary, checkRepeats, checkTimer, remainingOptions } from '../src/components/utilities/rules.js';
import { Pokemon } from '../src/data/pokemon.js';
import * as wanakana from 'wanakana';

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

describe('jpRuleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter, edge case for extended characters', () => {
    const w = 'ピカチュ';
    const x = 'ラクダ';
    const y = 'ダルマー';
    const z = 'マカロニ';

    console.log(w.charAt(w.length - 1));

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
      console.log(words[i]);
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

describe('testing character matching for jp', () => {
  test('check if katakana matches hiragana', () => {
    const x = 'りんご';
    const y = 'ごりら';
    const a = 'リンゴ';
    const b = 'ゴリラ';
    const x2 = wanakana.toKatakana(x);
    const b2 = wanakana.toHiragana(b);

    expect(ruleCheck(x2, b)).toEqual(true);
    expect(ruleCheck(x, b2)).toEqual(true);
  });
});

describe('testing jp game loss condition on n character', () => {
  test('check if word triggers loss condition', () => {
    const x = 'ピカチュウ';
    const y = 'あかん';
    const z = 'リザルドン';

    expect(jpLoss(x)).toEqual(false);
    expect(jpLoss(y)).toEqual(true);
    expect(jpLoss(z)).toEqual(true);
  });
});
