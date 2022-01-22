//Pattern using for loop

let p = 1;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    p = p + j;
  }
  p += "\n";
}
console.log(p);

//Write a JS program which prints the index and elements of the following array.
//Sample array : [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 

for(var i=0;i<=arr.length;i++) {
  console.log(arr[i]);
}

for (var i in arr) {
  console.log("The element of array "+i+" is");
  for (var j in arr[i]) {
    console.log(arr[i][j]);
  }
}

