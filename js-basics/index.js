
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
// const input3 = { a: "x", b: "y", c: "z" }
// const output3 = Object.fromEntries(
//   Object.entries(input3).map(([key, value]) => [value, key])
// )
// console.log(output3)

// //Q4
// const input = { a: 10, b: 50, c: 20 }
// const output = Object.keys(input).reduce((max, curr) => {
//   if (input[curr] > input[max]) {
//     return curr
//   } else {
//     return max
//   }
// })
// console.log(output)

//Q5
/* const input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] } */
//Soln 1
// const output = Object.entries(input).map((val) => {
//   return [...val[1]];
// }).flat()
// console.log(output)
// Soln2
// const output = Object.values(input).flat()
// console.log(output)

//Q6
// const input = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]
//
// const output = input.reduce((acc, curr) => {
//   if (!acc[curr.city]) {
//     acc[curr.city] = []
//   }
//   acc[curr.city].push(curr.name);
//   return acc
//
// }, {})
// console.log(output)

//Q7
// const input = { a: 20, b: 60, c: 40, d: 90 }
// const output = Object.fromEntries(Object.entries(input).filter(([key, value]) => {
//   return value > 50;
// })
// )
// console.log(output);
//
//Q8
const input = { A: [80, 90], B: [70, 75, 85] };
const output = Object.entries(input).reduce((key, [curr, value]) => {
  key[curr] = value.reduce(s)
});

console.log(output);
