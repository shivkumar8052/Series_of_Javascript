let nums = [1,2,3,4,5,6];
//ak sath multiple loop lagana also true ................
let new_arr = nums 
.map((item) => item*10)
.map((item) => item+1)
.filter((item) => item<=21)
console.log(new_arr);