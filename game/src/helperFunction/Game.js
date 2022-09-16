export const getStatus = (guess, value) => {
    if (Number(guess) < value) return "Nope. Your guess is lower than the value";
    else if (Number(guess) > value)
      return "Nope. Your guess is higher than the value";
    else return "You got it";
  };
  export const Reset = () => {};
  export const randomInteger = (lowerValue, upperValue, guessValue) => {
    const range = upperValue - lowerValue;
    if (!guessValue) {
      return Math.trunc(Math.random() * range + lowerValue);
    } else {
      let randInt = Math.trunc(Math.random() * range + lowerValue);
      while (randInt === guessValue) {
        randInt = Math.trunc(Math.random() * range + lowerValue);
      }
      return randInt;
    }
  };
  