class MyArray {
  constructor(...elements) {
    this.length=0;
    this.array = {};
    for(let i=0;i<elements.length; i++){
      this.array[i]=elements[i];
      this.length++;
    }
  }
  printArray() {
    console.log(this.array);
  }

  getLength() {
    return this.length;
  }

  push(...element) {
    let newLength=this.length+element.length;
    for(let i=0;i<element.length;i++){
      this.array[this.length] = element[i];
      this.length++;
    }
  }
  map(callback) {
    let mapArray = {};
    for (let i = 0; i < this.length; i++) {
      mapArray[i] = callback(this.array[i]);
    }
    return mapArray;
  }

  filter(callback) {
    let filterArray = {};
    for (let i = 0; i < this.length; i++) {
      if (callback(this.array[i])) {
        filterArray[i] = this.array[i];
      }
    }
    return filterArray;
  }

  reduce(callback, i = undefined) {
    let result;
    let previousValue;
    let j;
    if (i == undefined) {
      previousValue = this.array[0];
      j = 1;
    }
    else {
      previousValue = i;
      j = 0;
    }
    for (j; j < this.length; j++) {
      result = callback(previousValue, this.array[j]);
      previousValue = result;
    }
    return result;
  }

  includes(valueToFind, index = 0) {
    let i = index;
    for (i; i < this.length; i++) {
      if (valueToFind === this.array[i]) {
        return true;
      }
    }
    return false;
  }
}

let arr = new MyArray(1, 2, 3, 4, 5);
arr.printArray();
arr.push(22,33,44);
arr.printArray();
let newMapArray = arr.map(function (element) {
  return element * 10;
});
console.log(newMapArray);
let newFilterArray = arr.filter(function (element) {
  return element < 4;
})
console.log(newFilterArray);
let reduceResult = arr.reduce(function (sum, element) {
  return sum + element;
}, 0)
console.log(reduceResult);
console.log("includes result(finding 3 from 3 element):");
console.log(arr.includes(3, 3));
console.log("includes result(finding 3):");
console.log(arr.includes(3)); 
/* let pushingValue = 2000;
let newArray;

console.log("Your array:");
arr.printArray();

console.log(`Testing method push(pushingValue:${pushingValue}):`);
arr.push(pushingValue);
console.log(arr);

console.log(`Testing method map(every element*10)(result in new massive):`);
let newMapArray = arr.map(function (element) {
  return element * 10;
});
console.log("map result:");
console.log(newMapArray);
console.log("old massive after map");
console.log(arr);

console.log(`Testing method filter(elements<4)(result in new massive):`);
let newFilterArray = arr.filter(function (element) {
  return element < 4;
})
console.log("filter result:");
console.log(newFilterArray);
console.log("old massive after filter");
console.log(arr);

console.log(`Testing method reduce(sum of element of massive):`);
let reduceResult = arr.reduce(function (sum, element) {
  return sum + element;
}, 0)
console.log("reduce result:");
console.log(reduceResult);

console.log(`update method includes with starting index:`);
console.log("includes result(finding 3 from 3 element):");
console.log(arr.includes(3, 3));
console.log("includes result(finding 3):");
console.log(arr.includes(3)); */