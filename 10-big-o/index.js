// Constant Time Complexity: Big O(1)

function multipleByTwo(n) {
  return 2 * n;
}

// multipleByTwo(10)  
// multipleByTwo(3000) 

// Linear Time Complexity: Big O(N)

function reverseArr(originalArray) {
  let newArray = [];
  for (let i = originalArray.length - 1; i >= 0; i--) {
    newArray.push(originalArray[i]);
  }

  return newArray;
}

// reverseArr([4, 5, 6])
// reverseArr([6, 5, 4, 3, 2, 1])

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Optimize the previous code to O(1)

// function addUpTo(n) {
//   return n * (n+1) / 2;
// }

// Logarithmic Time Complexity: Big O(log n)

const binarySearch = (arr, item) => {
  let start = 0;
  // set end to the index of the last element in the array
  let end = arr.length - 1; 
  while (start <= end) {
    // finding the middle of the array
    const middle = Math.floor((start + end) / 2);
    console.log("middle", middle)
    console.log("middle element", arr[middle])
    // if the element in the middle matches the
    // item we are searching for, return and exit
    if (arr[middle] === item) {
      return middle;
    }

    // if the element in the middle is greater than the item
    // look to the left of the data set
    if (arr[middle] > item) {
      end = middle - 1;
      // else look to the right of the data set
    } else {
      start = middle + 1;
    }
  }

  return null; //if not found
};

// binarySearch([1, 2, 3, 4, 5], 10);
// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15);

// Quadratic Time Complexity: Big O(N^2)

function multAllElements(arr1) {
  let sumOfProducts = 0;

  for (let el of arr1) { 
    for (let subEl of arr1) {
      sumOfProducts += el * subEl;
    }
  }
  return sumOfProducts;
}

// multAllElements([1, 2]) 
// multAllElements([1, 2, 3, 4])
