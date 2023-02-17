// // First Task

// let str = "How are you.";
// let count = 0;
// let vowels = "aeiou";
// // let count1 = vowels.split("").length;
// for (let i = 0; i < str.length; i++) {
//   if (vowels.indexOf(str[i]) > -1) {
//     count++;
//   }
//   words = str.split(" ").length;
// }
// console.log("The numbers of words are:", words);
// console.log("The Vowels are:", count);

// // Second Task

// let arr1 = [3, 1, 7, 9];
// let arr2 = [2, 4, 1, 9, 3];
// let sum1 = 0;
// let arr = arr1.concat(arr2);
// let sum2 = 0;

// // find the sum of all duplicates & place them in array1

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       sum1 += arr1[i] + arr2[j];
//     }
//   }
// }

// // find the total sum of both arrays & place it in array 2

// for (let i = 0; i < arr.length; i++) {
//   sum2 = sum2 + arr[i];
// }

// // find the sum of the unique elements by distracting the sum of duplicates from the total sum

// const unique = sum2 - sum1;

// console.log(unique);

//First Task
let str = "How are you.";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a" || str[i] === "e") {
    count++;
  }
}

console.log(count);
console.log(str.split(" ").length);

//Second Task
let arr1 = [3, 1, 7, 9];
let arr2 = [2, 4, 1, 9, 3];
function test(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let distinct = true;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        distinct = false;
      }
    }
    if (distinct) {
      sum += arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let distinct = true;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        distinct = false;
      }
    }
    if (distinct) {
      sum += arr2[i];
    }
  }
  return sum;
}
console.log(test(arr1, arr2));
