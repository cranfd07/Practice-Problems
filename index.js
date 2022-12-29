console.log("Hello");

/*function descendingOrder(n){
    //create newString use the methods - toString - split
   
    const newString = n.toString().split('');
    //sort method b - a
    const finalArray = newString.sort();
    console.log(finalArray)
    return parseInt(finalArray.reverse().join(''));
  }

  console.log(descendingOrder(111));
  console.log(descendingOrder(15));
  console.log(descendingOrder(121));
  console.log(descendingOrder(123456789));*/

/*function alphanumeric(string){
    //create an object with all passable values 
    const obj = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true,
        h: true,
        i: true,
        j: true,
        k: true,
        l: true,
        m: true,
        n: true,
        o: true,
        p: true,
        q: true,
        r: true,
        s: true,
        t: true,
        u: true,
        v: true,
        w: true,
        x: true,
        y: true,
        z: true,

    }
    if (string[0] === undefined) return false;
    //for loop over the input string 
    for (let i = 0; i < string.length; i++) {
    //conditional: if string[i].toLowerCase() !== key on the object then return false 
    if (!obj[string[i].toLowerCase()]) {
        return false;
    }
    }
    //outside of the for loop
    //return true;
    return true;
  }

  console.log(alphanumeric("Mazinkaiser"));
  console.log(alphanumeric("hello world_"));
  console.log(alphanumeric("PassW0rd"));
  console.log(alphanumeric("       "));*/

//   function domainName(url){
//     return new URL(url).hostname;
//   }

//   console.log(domainName("http://google.com"));
//   console.log(domainName("http://google.co.jp"));
//   console.log(domainName("www.xakep.ru"));
//   console.log(domainName("https://youtube.com"));

// function firstNonRepeatingLetter(s) {
//     //create an object
//     const obj = {};
//     //for loop
//     for (let i = 0; i < s.length; i++) {
//     //make each el a key on the object
//     if (s[i].toLowerCase() in obj) {
//         obj[s[i].toLowerCase()] = obj[s[i].toLowerCase()] + 1;
//     } else {
//         obj[s[i].toLowerCase()] = 1;
//     }
//     //value would be the number of times that el is repeated in the input string
//     }
//     console.log(obj)
//     //for in loop
//     for (const value in obj) {
//         if (obj[value] === 1) {
//             for (let i = 0; i < s.length; i++) {
//                 if (value === s[i]) {
//                     return s[i];
//                 }
//                 if (value.toUpperCase() === s[i]) {
//                     return s[i]
//                 }
//             }0
//         }
//     }
//     //whichever value is === 1 then return that key
//     return '';
//   }

//   console.log(firstNonRepeatingLetter('a'));
//   console.log(firstNonRepeatingLetter('stress'));
//   console.log(firstNonRepeatingLetter('moonmEn'));

// function add(n){
//     //create a sumAll variable
//     console.log(n)
//     let sumAll = 0;
//     //return a function pass args as the parameter with the spread operator
//     return function(...args) {
//         sumAll += n;
//         sumAll += args;
//         return sumAll;
//     }

//   }

// //   console.log(add(1)(2));
// //   console.log(add(1)(2)(3));
//   console.log(add(1)(2)(3)(4));

// function maskify(cc) {
// let newString ='';
// if (cc[0] === undefined) return '';
// for (let i = 0; i < cc.length; i++) {
//     if ([i] < cc.length - 4) {
//         newString += '#';
//     } else {
//         newString += cc[i];
//     }
// }
// return newString;
// }
// // console.log(maskify('45563646079356160000'));
// // console.log(maskify('1'));
// // console.log(maskify('111111'));
// console.log(maskify(''))

// function solution(str) {
//     //create an empty array
//     console.log(str.slice(1), str.slice(1))
//     const newArray = [];
//     let counterOne = 0;
//     let counterTwo = 1;
//     //for loop over the input string
//     for (let i = 0; i < str.length; i++) {
//         newArray.push('str[counterOne], str[counterTwo]')
//     //return empty array
//     counterOne + 2;
//     counterTwo + 2;
//     }
//     return newArray;

// }

// console.log(solution('abcdef'));
// console.log(solution('abcdefg'));
// console.log(solution('abcdefg'));

// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }

// };

// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6]), 7);

// var pivotIndex = function(nums) {
//     //create a leftSumValue
//     let leftSumValue = 0;
//     //create a rightSumValue
//     let rightSumValue = 0;
//     //create a counter variable = 1
//     let counter = 1;
//     //for loop over the input nums
//     for (let i = 0; i < nums.length; i++) {
//     //leftSumValue =+ nums[i];
//     leftSumValue += nums[i];
//     //if (leftSumValue === rightSumValue) return nums[i + 1]
//     if (leftSumValue === rightSumValue) return (i + 1);
//     //rightSumValue =+ nums[nums.length - counter]
//     rightSumValue += nums[nums.length - counter];
//     //counter++;
//     counter++;
//     //if (leftSumValue === rightSumValue) return nums[i + 1]
//     if (leftSumValue === rightSumValue) return (i + 1);
//     if(nums[i] === undefined) return -1;
//     }
//     //outside of loop
//     //return -1;
// };

// // debugger;
// // console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3,]));

// var runningSum = function(nums) {
//   let newSum = 0;
//   const newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//       newSum += nums[i];
//       newArr.push(newSum);
//   }
//   return newArr;
// };

// console.log(runningSum([1,2,3,4]))

// var pivotIndex = function(nums) {
// <<<<<<< HEAD
// //   let totalSum = 0;
// // let leftSum = 0;
// =======
// //   let totalSum = 0;
// // let leftSum = 0;
// >>>>>>> 92bb53166810b25b5a1b042d634a3676955e3992
// // nums.forEach((element) => totalSum += element);
// // for(let e=0; e<nums.length; e++){
// //  if(totalSum - leftSum - nums[e] === leftSum){
// //     return e;
// //  }
// //  leftSum += nums[e]
// // }
// <<<<<<< HEAD
// // return -1;
// };

// function flattenDeep(array) {
//   // CODE HERE
//   console.log(array[0])
//   const newArray = array.slice(1);
//   console.log(newArray);
//   console.log(newArray[0]);
// }

// console.log(flattenDeep([1, [2, 3, [4]]]));

// =======
// return -1;
// };

// var isIsomorphic = function (s, t) {
//   //conditional if the lengths of both s and t are not equal return false
//   if (s.length !== t.length) return false;

//   const mapa = new Map();
//   const mapb = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (mapa.has(s[i])) {
//       if (mapa.get(s[i]) !== t[i]) {
//         return false;
//       }
//     } else {
//       mapa.set(s[i], t[i]);
//     }

//     if (mapb.has(t[i])) {
//       if (mapb.get(t[i]) !== s[i]) {
//         return false;
//       }
//     } else {
//       mapb.set(t[i], s[i]);
//     }
//   }
//   console.log(mapa);
//   return true;
// };

// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));

// var isSubsequence = function (s, t) {
//   //create a new a s variable
//   console.log(s.length);
//   let newVar = "";
//for loop over the s input
//   for (let i = 0; i < s.length; i++) {
//     let newS = s[i];
//     //for loop over the t input string
//     for (let j = 0; j < t.length; j++) {
//       //conditional: if s === t then push that
//       if (newS === t[j]) {
//         newVar += t[j];
//         console.log(newVar);
//       }
//     }
//   }
//   //outside the for loop
//   //conditonal if new sVar is === input s string return false
//   console.log(newVar);
//   if (s === newVar) {
//     return true;
//   } else {
//     return false;
//   }
//   //else: return false
// };

// // console.log(isSubsequence("abc", "ahbgdc"));
// // console.log(isSubsequence("axc", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));

// function reduce(array, callback, start) {
//   // CODE HERE
//   console.log(callback)
//   if (!start) {
//     let finalValue = array[0]
//     console.log(finalValue)
//   for (let i = 1; i < array.length; i++) {
//     finalValue += array[i];
//     console.log(finalValue)
//   }
//   return finalValue;
// }

// function reduce(array, callback, start) {
//   // CODE HERE
//   let newValue = 0;
//   if (!start) {
//     let finalValue = array[0]
//   for (let i = 1; i < array.length; i++) {
//     console.log(callback(finalValue, array[i]))
//     finalValue += callback(array[i]);
//   }
//   return finalValue;
// }

// function flattenDeep(array) {
//   let newArr = [];
//   //if array.length === 0 then return newArr
//   //for loop over the input array
//   for (let i = 0; i < array.length; i++) {
//   //conditional: if array[0] doesn't equal an array we are going to push/slice it to the newArray
//   if (Array.isArray(array[i])) {
//     newArr = newArr.concat(flattenDeep(array[i]));
//   } else {
//   //conditional: else return flattenDeep over
//     newArr.push(array[i]);
//   }
//   }
//   return newArr;
// }

// console.log(flattenDeep([1, [2, 3, [4]]]));

// function flattenDeep(array) {
//   let newArr = [];
//   //if array.length === 0 then return newArr
//   //for loop over the input array
//   for (let i = 0; i < array.length; i++) {
//   //conditional: if array[0] doesn't equal an array we are going to push/slice it to the newArray
//   if (Array.isArray(array[i])) {
//     newArr = newArr.concat(flattenDeep(array[i]));
//   } else {
//   //conditional: else return flattenDeep over
//     newArr.push(array[i]);
//   }
//   }
//   return newArr;
// }

// console.log(flattenDeep([1, [2, 3, [4]]]));

// function flattenDeep(array) {
//   let newArr = [];
//   //if array.length === 0 then return newArr
//   //for loop over the input array
//   for (let i = 0; i < array.length; i++) {
//   //conditional: if array[0] doesn't equal an array we are going to push/slice it to the newArray
//   if (Array.isArray(array[i])) {
//     newArr = newArr.concat(flattenDeep(array[i]));
//   } else {
//   //conditional: else return flattenDeep over
//     newArr.push(array[i]);
//   }
//   }
//   return newArr;
// }

// console.log(flattenDeep([1, [2, 3, [4]]]));

// var runningSum = function(nums) {
//   //create a newSum array
//   let sumArray = [];
//   let updatedSum = 0;
//   //for loop over the input array
//   for (let i = 0; i < nums.length; i++) {
//   //updatedSum += nums[i]
//     updatedSum += nums[i];
//   //sumArray.push(updatedSum0)
//   sumArray.push(updatedSum);
//   }
//     return sumArray;
// };
// console.log(runningSum([1,2,3,4]))

// var pivotIndex = function (nums) {};

// // console.log(isSubsequence("abc", "ahbgdc"));
// // console.log(isSubsequence("axc", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));

// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// var twoSum = function (nums, target) {
//   //create a newVar with the sum
//   //conditional if newVar === target
//   //for loop over the nums array
//   for (let i = 0; i < nums.length; i++) {
//     let numsTwo = nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         if (numsTwo + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
//   //for loop over numsTwo array again
//   //conditional if numsTwo[j] !== nums[i] then
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

var lengthOfLongestSubstring = function (s) {
  //create a new variable as an empty string
  //for loop over input string
  for (let i = 0; i < s.length; i++) {
    let checkerEl = s[i];
    for (let j = 0; j < s.length; j++) {
      if (i !== j) {
        console.log(checkerEl, s[j]);
      }
    }
  }
  //for loop using first el in string to see when it is repeated
};

console.log(lengthOfLongestSubstring("abcabcbb"));

var lengthOfLongestSubstring = function (s) {
  //create a new variable as an empty string
  //for loop over input string
  for (let i = 0; i < s.length; i++) {
    let checkerEl = s[i];
    for (let j = 0; j < s.length; j++) {
      if (i !== j) {
        console.log(checkerEl, s[j]);
      }
    }
  }
  //for loop using first el in string to see when it is repeated
};

// console.log(lengthOfLongestSubstring("abcabcbb"));

// //Recursion
// console.log("Hello, world!");

// function repeater(char) {
//   //baseCase: if char.length === 5 return char
//   if (char.length === 5) {
//     return char;
//   }
//   //return function repeater(char[0] + char)
//   return repeater(char[0] + char);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater("g"));
// console.log(repeater("j"));

// function factorial(num, finalValue = 1) {
//   if (num === 1) return finalValue;
//   let numValue = num - 1;
//   let updatedValue = num * finalValue;
//   return factorial(numValue, updatedValue);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720

// function getLength(array, length = 0) {
//   //conditional: array[0] === undefined return length
//   if (array[0] === undefined) return length;
//   //length++;
//   length++;
//   //return getLength(array.slice(1), length)
//   return getLength(array.slice(1), length);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

// function pow(base, exponent) {
//   //baseCase: exponenet === 0 then return base
//   if (exponent === 1) return base;
//   //base can't change
//   //return base * pow(base, exponent - 1)
//   exponent--;
//   return base * pow(base, exponent);
// }

// //1) conditional: false; return 2 * [pow(2, 3) === 8] value === 16
// //2) conditional: false; return 2 * [pow(2, 2) === 4] value === 8
// //3) conditional: false; return 2 * [pow(2, 1) === 2] value === 4
// //4) conditional: true; return 2

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243a

// function flow(input, funcArray) {
//   if (funcArray[0] === undefined) return input;
//   return flow(funcArray[0](input), funcArray.slice(1));
// }

// // To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) {
//   return num * 2;
// }
// function add7(num) {
//   return num + 7;
// }
// function modulo4(num) {
//   return num % 4;
// }
// function subtract10(num) {
//   return num - 10;
// }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

function shuffleCards(topHalf, bottomHalf) {
  // YOUR CODE HERE
  if (topHalf[0] === undefined) {
    return bottomHalf;
  } else if (bottomHalf[0] === undefined) {
    return topHalf;
  }
  return [topHalf[0], bottomHalf[0]].concat(
    shuffleCards(topHalf.slice(1), bottomHalf.slice(1))
  );
}

// UNCOMMENT TO TEST YOUR WORK
const topHalf = [
  "Queen of Diamonds",
  "Five of Hearts",
  "Ace of Spades",
  "Eight of Clubs",
];
const bottomHalf = ["Jack of Hearts", "Ten of Spades"];
console.log(shuffleCards(topHalf, bottomHalf));
/*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */
