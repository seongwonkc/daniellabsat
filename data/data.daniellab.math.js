'use strict';
const MATH_ALL = [
  // Algebra
  // ...DL_ALGEBRA, ...DL_ALGEBRA2,
  // Advanced Math
  // ...DL_ADVANCED_MATH, ...DL_ADVANCED_MATH2,
  // Problem Solving & Data
  // ...DL_PSDA, ...DL_PSDA2,
  // Geometry
  // ...DL_GEOMETRY, ...DL_GEOMETRY2,
];

const MATH_QUESTIONS       = _dlShuffle([...MATH_ALL]).slice(0, 20);
const MATH2_EASY_QUESTIONS = _dlShuffle([...MATH_ALL]).slice(0, 20);
const MATH2_HARD_QUESTIONS = _dlShuffle([...MATH_ALL]).slice(0, 20);

function _dlShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}