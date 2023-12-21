// function countIdd(arg) {
//   return Math.trunc((arg + 1) / 2);
// }
// console.log(countIdd(13));

// function countOddNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOddNumbers(10));
// 1. Sonlardan tashkil topgan massiv elementlari orasidan toqlarining sonini topuvchi funksiya yozing
// function countOddNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,20];
// const oddCount = countOddNumbers(numbers);
// console.log("Toq son", oddCount, "ta");

// 2. Sonlardan tashkil topgan massiv elementlari orasidan 3 ga hamda 7 ga karralilarining kopaytmasini topuvchi funksiya yozing //
// function findMultiplesOfThreeAndSeven(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] % 7 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multiples = findMultiplesOfThreeAndSeven(numbers);
// console.log( multiples);

// 3. Sonlardan tashkil topgan massiv berilganda uning toq elementlaridan iborat yangi // massiv hosil qiladigan funksiya yozing
// function filterOddNumbers(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = filterOddNumbers(numbers);
// console.log( oddNumbers);
// 4. Sonlardan tashkil topgan massiv berilganda uning juft indeksdagi elementlaridan iborat // yangi massiv hosil qiladigan funksiya yozing
// function getEvenIndexedElements(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const indexedNumbers = getEvenIndexedElements(numbers);
// console.log(indexedNumbers);

// 5. So'zlardan tashkil togan massiv berilganda ushbu so'zlarning bosh harflaridan iborat yangi // massiv hosil qiladigan funksiya yozing

// 6. Sonlardan tashkil topgan massiv berilganda ushbu massiv orasidagi tub sonlar sonini / / topuvchi funksiya yozing

// 7. Sonlardan tashkil topgan massiv berilganda uning juft hamda 5 ga karrali elementlaridan iborat
// yangi massiv hosil qiladigan funksiya yozing
