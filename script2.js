// Declare variable marks. Your task is to print:

// - AA if marks is greater than 90.

// - AB if marks is greater than 80 and less than or equal to 90.

// - BB if marks is greater than 70 and less than or equal to 80.

// - BC if marks is greater than 60 and less than or equal to 70.

// - CC if marks is greater than 50 and less than or equal to 60.

// - CD if marks is greater than 40 and less than or equal to 50.

// - DD if marks is greater than 30 and less than or equal to 40.

// - FF if marks is less than or equal to 30.

let marks = 67;
if(marks > 90) {
    console.log("AA");
} else if(marks > 80 && marks <= 90) {
    console.log("AB");
} else if(marks > 70 && marks <= 80) {
    console.log("BB");
} else if(marks > 60 && marks <= 70) {
    console.log("BC");
} else if(marks > 50 && marks <= 60) {
    console.log("CC");
} else if(marks > 40 && marks <= 50) {
    console.log("CD");
} else if(marks > 30 && marks <= 40) {
    console.log("DD");
} else {
    console.log("FF");
}




// Declare a variable named DAY whose value represents a day in a week.
// Using switch case console log the name of the day from the week based on the value of DAY

var days = "Monday";
switch(days) {
    case "Sunday":
        console.log("Today is sunday");
        break;
    case "Monday":
        console.log("Today is monday");
        break;
    case "Tuesday":
        console.log("Today is tuesday");
        break;
    case "Wednesday":
        console.log("Today is wednesday");
        break;
    case "Thursday":
        console.log("Today is thursday");
        break;
    case "Friday":
        console.log("Today is friday");
        break;
    default:
        console.log("Today is saturday");
}



// Sort the given array in ascending order and after sorting change the last value to string ‘LAST’.
// Console log the output Sample array = [1, 5, 3, 2, 4]


let Arr1 = [1, 5, 3, 2, 4];
for (var i = 0; i < Arr1.length; i++){
    for (var j = 0; j < i; j++){
        if (Arr1[i] < Arr1[j]) {
          var x = Arr1[i];
          Arr1[i] = Arr1[j];
          Arr1[j] = x;
        }
    }
}
console.log(Arr1);

Arr1[4] = "LAST";
console.log(Arr1);




