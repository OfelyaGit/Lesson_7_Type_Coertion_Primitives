// Շարունակելի

let open_1 = "(";
open_2 = "[";
open_3 = "{";
close_1 = ")";
close_2 = "]";
close_3 = "}";

let scope_str = "{([[]}){[[}[(]])]]]}]}";
// flag = false;
sum_open_1 = 0;
sum_open_2 = 0;
sum_open_3 = 0;
sum_close_1 = 0;
sum_close_2 = 0;
sum_close_3 = 0;

for (let i = 0; i < scope_str.length; i++) {
  if (scope_str.length % 2 != 0) {
    console.log("the scope_str is not correct");
    break;
  } else if (scope_str[i] === open_1) {
    sum_open_1 += 1;
  } else if (scope_str[i] === open_2) {
    sum_open_2 += 1;
  } else if (scope_str[i] === open_3) {
    sum_open_3 += 1;
  } else if (scope_str[i] === close_1) {
    sum_close_1 += 1;
  } else if (scope_str[i] === close_2) {
    sum_close_2 += 1;
  } else if (scope_str[i] === close_3) {
    sum_close_3 += 1;
  }
  if (
    sum_open_1 === sum_close_1 &&
    sum_open_2 === sum_close_2 &&
    sum_open_3 === sum_close_3
  ) {
  }
}
console.log(sum_open_1);
console.log(sum_open_2);
console.log(sum_open_3);
console.log(sum_close_1);
console.log(sum_close_2);
console.log(sum_close_3);
