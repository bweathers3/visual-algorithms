export function searchBaseState() {
  return {
    type: 'SEARCH_BASE_STATE'
  }
}

export function sortBaseState() {
  return {
    type: 'SORT_BASE_STATE'
  }
}

export function togglePlayPause(isRunning, paused) {
  return {
    type: 'TOGGLE_PLAY_PAUSE',
    isRunning: isRunning,
    paused: paused
  }
}

export function startSelectionSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_SELECTION_SORT'
  }
}

export function startInsertionSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_INSERTION_SORT'
  }
}

export function startBubbleSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_BUBBLE_SORT'
  }
}

export function startMergeSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_MERGE_SORT'
  }
}

export function startQuickSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_QUICK_SORT'
  }
}

export function startBinarySearch(binaryTimeout, linearTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  return {
    type: 'START_BINARY_SEARCH'
  }
}

export function startLinearSearch(binaryTimeout, linearTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  return {
    type: 'START_LINEAR_SEARCH'
  }
}

export function changeSpeed(speed, ...timeouts) {
  // unkown number of timeouts cleared, since different for search/sort algorithm pages
  // pass timeouts spread, then iterate over each and clear
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}
