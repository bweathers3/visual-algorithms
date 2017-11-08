
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
