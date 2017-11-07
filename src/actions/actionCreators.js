
import actionTypeSet from './actionTypeSet';
import actionBinarySearch from './actionBinarySearch';
import actionBubbleSort from './actionBubbleSort';
import actionInsertionSort from './actionInsertionSort';
import actionLinearSearch from './actionLinearSearch';
import actionMergeSort from './actionMergeSort';
import actionQuickSort from './actionQuickSort';
import actionSelectionSort from './actionSelectionSort';


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
