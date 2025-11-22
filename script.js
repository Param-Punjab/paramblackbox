let arr = [1, 2, 3, 4, 5, 6, 7];
let new_arr = arr.map(function(val) {
  return 12 * val;
});

console.log(new_arr);

let another_arr = arr.filter(function(val) {
  if (val <= 4) { true; }
});
console.log(another_arr);

let arr_another = arr.reduce(function(acc, val) {
  return acc + val;
}, 0);
