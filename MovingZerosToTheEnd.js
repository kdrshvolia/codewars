const partition = (array, callback) =>
  array.reduce(
    (acc, currentNumber) => {
      acc[callback(currentNumber) ? 0 : 1].push(currentNumber);
      return acc;
    },
    [[], []],
  );

const moveZerosToTheEnd = array => {
  const [zeros, notZeros] = partition(array, x => x === 0);
  return [...notZeros, ...zeros];
};

