
//Q1
// const input = {
//   food: [10, 20, 30],
//   travel: [5, 15],
//   bills: [40, 60]
// };
//
// const result = Object.fromEntries(
//   Object.entries(input).map(([key, arr]) => [
//     key,
//     arr.reduce((sum, val) => sum + val, 0)
//   ])
// );
//
// console.log(result);

// //Q2
// const input2 = ["apple", "banana", "apple", "orange", "banana", "apple"]
//
// const result2 = {}
//
// input2.forEach(word => {
//   result2[word] = (result2[word] || 0) + 1
// })
//
// console.log(result2);

//Q3
const input3 = { a: "x", b: "y", c: "z" }

const output3 = Object.fromEntries(
  Object.entries(input3).map(([key, value]) => [value, key])
)
console.log(output3)
