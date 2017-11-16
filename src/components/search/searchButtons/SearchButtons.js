import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import PlayPauseButtons from '../../playPauseButtons/PlayPauseButtons';

import './searchButtons.css';

var classNames = require('classnames');

class SearchButtons extends React.Component {

  render() {

    const { searchArray, searchNumber, low, high, iterations, isRunning, targetFound, searchAlgorithm, paused } = this.props.search;

    const { intervalSpeed, speedString, regularActive, slowActive, fastActive } = this.props.speed;

    var regularSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': regularActive
    });

    var slowSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': slowActive
    });

    var fastSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': fastActive
    });

    var linearTimeout;
    var binaryTimeout;

    console.log('this.props in searchButtons.js');
    console.log(this.props);


    if (targetFound === false && isRunning && searchAlgorithm.name === 'Linear Search') {
      linearTimeout = setTimeout (() => {
      this.props.actions.linear.linearSearch(searchArray, searchNumber, low, high, iterations);
      }, intervalSpeed);
    }

    console.log('this.props after Linear IF statement in searchButtons.js');
    console.log(this.props);

    if (targetFound === false && isRunning && searchAlgorithm.name === 'Binary Search') {
      binaryTimeout = setTimeout (() => {
      this.props.actions.binary.binarySearch(searchArray, searchNumber, low, high, iterations);
      }, intervalSpeed);
    }

    console.log('this.props after Binary IF statement in searchButtons.js');
    console.log(this.props);

    if (paused) {
      clearTimeout(linearTimeout);
      clearTimeout(binaryTimeout);
    }

    console.log('this.props after (paused) IF statement in searchButtons.js');
    console.log(this.props);
    console.log('linearTimeout and binaryTimeout');
    console.log(linearTimeout, binaryTimeout);


    return (
      <Row className="search-button-row">
        <Col xs={ 12 } className="buttons">
          <Col xs={ 6 } className="search-algo-buttons">
            <button className='button-size linear-search-button' onClick={ () => this.props.actions.linear.startLinearSearch(binaryTimeout, linearTimeout) }>Linear Search</button>
            <button className='button-size binary-search-button' onClick={ () => this.props.actions.binary.startBinarySearch(binaryTimeout, linearTimeout) }>Binary Search</button>
          </Col>
          <Col xs={ 6 } className="speed-buttons">
            <button className={ slowSpeedClass } onClick={ () => this.props.actions.types.changeSpeed('slow', binaryTimeout, linearTimeout) }>Slow</button>
            <button className={ regularSpeedClass } onClick={ () => this.props.actions.types.changeSpeed('regular', binaryTimeout, linearTimeout) }>Regular</button>
            <button className={ fastSpeedClass } onClick={ () => this.props.actions.types.changeSpeed('fast', binaryTimeout, linearTimeout) }>Fast</button>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default SearchButtons;
