var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem) {
  return [elem,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}