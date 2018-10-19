var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem) {
  return [elem,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray(arr, elem) {
  return [chocolateBars,...elem]
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function accessElementInArray(arr,i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift 
  return arr
}