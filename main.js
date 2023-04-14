
console.log("-----------------------------Task-1-----------------------------");
//function that takes an array of numbers as input and returns the sum of all even numbers in the array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {

      sum = sum + array[i];
    }
  }
  return sum;
}

console.log("Sum of Even Numbers in the Array is:", sumEvens(array));





console.log("-----------------------------Task-2-----------------------------");
//function that takes a string as input and returns the number of vowels in the string.

let str = "It was an honour meeting you";
const vowels = ["a", "e", "i", "o", "u"];
let Result = countVowels(str);
function countVowels(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count
}
console.log("Count of vowels in the String : ", Result);





console.log("-----------------------------Task-3-----------------------------");
//function that takes an array of strings as input and returns the length of the longest string in the array.


let arr = ["Apple", "Mango", "Orange", "Watermelon", "Guava"];

function getLongestStr(arr) {
  let longestStr = {
    length: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr.length = arr[i].length;
    }
  }
  return longestStr;
}
let longestString = getLongestStr(arr);
console.log("length of the longest string in an array : ", (longestString.length));





console.log("-----------------------------Task-4-----------------------------");
//function that takes an array of numbers as input and returns the average of all the numbers in the array.

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateAverage(Array) {
  let total = 0;
  let count = 0;

  Array.forEach(function (item) {
    total += item;
    count++;
  });

  return total / count;
}
console.log("The Average is : ", calculateAverage(Array));



console.log("-----------------------------Task-5-----------------------------");
// a function that takes an object as input and returns an array of all the keys in the object.

const objects = {
  Name: "Sheikh",
  Age: 16,
  City: "USA",
};
const keys = Object.keys(objects)

console.log("Keys of the Object : ", keys);




console.log("-----------------------------Task-6-----------------------------");
//function that takes an array of objects as input and returns an array of all the values for a specified key in each object.

const object = [{
  name: "John",
  age: 19,
  city: "New york"
},
{
  name: "Maria",
  age: 18,
  city: "Amsterdam"
},
{
  name: "Peter",
  age: 20,
  city: "Brazil"
},
];
const names = object.map((values) => values.name);
console.log("Values for the specified  Keys of each Object : ", names);




console.log("-----------------------------Task-7-----------------------------");
//a function that takes an array of strings as input and returns an array of all the unique strings in the array.

let arrObject = ["Apple", "Mango", "Apple", "Orange", "Watermelon", "Orange", "Guava"];
let newArrObject = arrObject.filter(unique);

function unique(value, index, self) {
  return self.indexOf(value) === index
}
console.log("Unique Strings in the Array : ", newArrObject);





console.log("-----------------------------Task-8-----------------------------");
// a function that takes an array of numbers as input and returns the product of all the numbers in the array.

let newArray = [1, 2, 3, 4, 5, 6];
let product = 1,
  i;
for (let i = 0; i < newArray.length; i++) {
  product *= newArray[i];
}
console.log("The Product of Array is : ", (product));



