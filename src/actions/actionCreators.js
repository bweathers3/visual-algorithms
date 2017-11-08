
import * as  actionTypeSet from './actionTypeSet';
import * as  actionBinarySearch from './actionBinarySearch';
import * as  actionBubbleSort from './actionBubbleSort';
import * as  actionInsertionSort from './actionInsertionSort';
import * as  actionLinearSearch from './actionLinearSearch';
import * as  actionMergeSort from './actionMergeSort';
import * as  actionQuickSort from './actionQuickSort';
import * as  actionSelectionSort from './actionSelectionSort';


const actionCreators = {
  typeSet: actionTypeSet,
  binary: actionBinarySearch,
  bubble: actionBubbleSort,
  insertion: actionInsertionSort,
  linear: actionLinearSearch,
  merge: actionMergeSort,
  quick: actionQuickSort,
  selection: actionSelectionSort
};


export default actionCreators;

export function linearSearch(searchArray, searchNumber, low, high, iterations) {
  var testItem = iterations;
  iterations += 1;
  var isRunning = true;
  var targetFound = false;

  if (searchArray[testItem] !== searchNumber && isRunning) {
    low ++;
    testItem ++
  } else {
    var target = testItem;
    high = testItem;
    targetFound = true;
    isRunning = false
  }
  return {
    type: 'LINEAR_SEARCH',
    searchArray: searchArray,
    searchNumber: searchNumber,
    low: low,
    high: high,
    testItem: testItem,
    index: testItem,
    iterations: iterations,
    isRunning: isRunning,
    targetFound: targetFound,
    target: target
  }
}
