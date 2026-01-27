

const input = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60]
};

const result = Object.fromEntries(
  Object.entries(input).map(([key, arr]) => [
    key,
    arr.reduce((sum, val) => sum + val, 0)
  ])
);

console.log(result);


