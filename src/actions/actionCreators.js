
import * as  actionTypeSet from './actionTypes';
import * as  actionBinarySearch from './actionBinarySearch';
import * as  actionBubbleSort from './actionBubbleSort';
import * as  actionInsertionSort from './actionInsertionSort';
import * as  actionLinearSearch from './actionLinearSearch';
import * as  actionMergeSort from './actionMergeSort';
import * as  actionQuickSort from './actionQuickSort';
import * as  actionSelectionSort from './actionSelectionSort';


const actionCreators = {
  types: actionTypeSet,
  binary: actionBinarySearch,
  bubble: actionBubbleSort,
  insertion: actionInsertionSort,
  linear: actionLinearSearch,
  merge: actionMergeSort,
  quick: actionQuickSort,
  selection: actionSelectionSort
};


export default actionCreators;
