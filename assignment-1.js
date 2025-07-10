// function findMaxMin(arr) {
//   let max = arr[0], min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return { max, min };
// }
// console.log(findMaxMin([5, 2, 9, -3, 7]));


function Sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(Sort([3, 1, 4, 2, 5]));


// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;
//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) result[result.length] = arr[i];
//   }
//   return result;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 1]));

function removeDuplicateChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) result += str[i];
  }
  return result;
}
console.log(removeDuplicateChars("HelloWorld"));


function camelToSnake(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += '_';
      result += String.fromCharCode(str.charCodeAt(i) + 32); // lowercase
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(camelToSnake("helloWorldTest"));


function snakeToCamel(str) {
  let result = '';
  let toUpper = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      toUpper = true;
    } else {
      result += toUpper ? String.fromCharCode(str.charCodeAt(i) - 32) : str[i];
      toUpper = false;
    }
  }
  return result;
}
console.log(snakeToCamel("hello_world_test"));

function flatten(arr) {
  let result = [];

  function flatHelper(a) {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        flatHelper(a[i]);
      } else {
        result[result.length] = a[i];
      }
    }
  }

  flatHelper(arr);
  return result;
}
console.log(flatten([1, [2, [3, 4]], 5]));

