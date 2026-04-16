'use strict';

const RW_ALL = [...DL_CRAFT_STRUCTURE, ...DL_INFO_IDEAS, ...DL_SEC, ...DL_EOI];

const RW1_QUESTIONS      = _dlShuffle([...RW_ALL]).slice(0, 20);
const RW2_EASY_QUESTIONS = _dlShuffle([...RW_ALL]).slice(0, 20);
const RW2_HARD_QUESTIONS = _dlShuffle([...RW_ALL]).slice(0, 20);

function _dlShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}