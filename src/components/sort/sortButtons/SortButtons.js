import React from 'react';

import './sortButtons.css';
import { Col, Row } from 'react-bootstrap';

var classNames = require('classnames');

class SortButtons extends React.Component {
  render() {

    const { sortArray, mergeArray, mergePrior, mergeArrayMain, mergePriorSorted, mergeArrayLeft1, mergeArrayLeft2, mergeArrayLeft3, mergeArrayLeft4, mergeArrayLeft5, mergeArrayLeft6, mergeArrayLeft7, mergeArrayRight1, mergeArrayRight2, mergeArrayRight3, mergeArrayRight4, mergeArrayRight5, mergeArrayRight6, mergeArrayRight7, sortedGroupIndex, currentlyChecking, currentLow, iterations, isRunning, insertionIndex, insertionKey, bubbleSwapsCounter, bubbleIndex, quickPivotIndex, quickLowIndex, quickHighIndex, quickPairsToSort, quickPriorPivots, sortAlgorithm, stopQuickSort, paused } = this.props.sort;

    const { intervalSpeed, regularActive, slowActive, fastActive } = this.props.speed;

    var regularSpeedClass = classNames({
      'sort-button-size': true,
      'sort-speed-button': true,
      'active-sort-btn': regularActive,
    });

    var slowSpeedClass = classNames({
      'sort-button-size': true,
      'sort-speed-button': true,
      'active-sort-btn': slowActive,
    });

    var fastSpeedClass = classNames({
      'sort-button-size': true,
      'sort-speed-button': true,
      'active-sort-btn': fastActive,
    });

    var selectionSortTimeout;
    var insertionSortTimeout;
    var bubbleSortTimeout;
    var mergeSortTimeout;
    var quickSortTimeout;

console.log('this.props in sortButtons.js');
console.log(this.props);

    if (isRunning && sortAlgorithm.name === 'Selection Sort') {
      selectionSortTimeout = setTimeout (()=> {
        this.props.selectionSort(sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations)
      }, intervalSpeed);
    }

    if (isRunning && sortAlgorithm.name === 'Insertion Sort') {
      insertionSortTimeout = setTimeout (()=> {
        this.props.insertionSort(sortArray, insertionIndex, insertionKey, currentlyChecking, iterations);
      }, intervalSpeed);
    }

    if (isRunning && sortAlgorithm.name === 'Bubble Sort') {
      bubbleSortTimeout = setTimeout (()=> {
        this.props.bubbleSort(sortArray, bubbleSwapsCounter, bubbleIndex, iterations);
      }, intervalSpeed);
    }

    if (isRunning && sortAlgorithm.name === 'Merge Sort') {
      mergeSortTimeout = setTimeout (()=> {
        this.props.mergeSort(mergeArray, mergePrior, mergePriorSorted, mergeArrayMain, mergeArrayLeft1, mergeArrayLeft2, mergeArrayLeft3, mergeArrayLeft4, mergeArrayLeft5, mergeArrayLeft6, mergeArrayLeft7, mergeArrayRight1, mergeArrayRight2, mergeArrayRight3, mergeArrayRight4, mergeArrayRight5, mergeArrayRight6, mergeArrayRight7, iterations);
      }, intervalSpeed);
    }

    if (isRunning && sortAlgorithm.name === 'Quick Sort') {
      quickSortTimeout = setTimeout (()=> {
        this.props.quickSort(sortArray, currentlyChecking, quickPivotIndex, quickLowIndex, quickHighIndex, quickPairsToSort, quickPriorPivots, iterations, stopQuickSort);
      }, intervalSpeed);
    }

    if (paused) {
      clearTimeout(selectionSortTimeout);
      clearTimeout(insertionSortTimeout);
      clearTimeout(bubbleSortTimeout);
      clearTimeout(mergeSortTimeout);
      clearTimeout(quickSortTimeout);
    }

    return (
      <Row className="sort-button-row">
        <Col xs={ 12 } className="sort-buttons">
          <Col xs={ 8 } className="algo-buttons">
            <button className="sort-button sort-button-size btn-responsive" onClick={ () => this.props.actions.typeSet.startSelectionSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Selection Sort</button>
            <button className="sort-button sort-button-size btn-responsive" onClick={ () => this.props.actions.typeSet.startInsertionSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Insertion Sort</button>
            <button className="sort-button sort-button-size btn-responsive" onClick={ () => this.props.actions.typeSet.startBubbleSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Bubble Sort</button>
            <button className="sort-button sort-button-size btn-responsive" onClick={ () => this.props.actions.typeSet.startMergeSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Merge Sort</button>
            <button className="sort-button sort-button-size btn-responsive" onClick={ () => this.props.actions.typeSet.startQuickSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Quick Sort</button>
          </Col>
          <Col xs={ 4 } className="sort-speed-buttons">
            <button className={ slowSpeedClass } onClick={ () => this.props.actions.typeSet.changeSpeed('slow', selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Slow</button>
            <button className={ regularSpeedClass } onClick={ () => this.props.actions.typeSet.changeSpeed('regular', selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Regular</button>
            <button className={ fastSpeedClass } onClick={ () => this.props.actions.typeSet.changeSpeed('fast', selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout, mergeSortTimeout, quickSortTimeout) }>Fast</button>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default SortButtons;
