import React, { Component } from 'react';
import NumberButton from './NumberButton';

const MAX_VALUE = 100;

class NumberList extends Component {
  constructor(props) {
    super(props);

    this.state = { currNum: 1, playInProgress: false };
    this.nums = this.createRandomArray();
  }

  createRandomArray() {
    let nums = [];

    for (let i = 1; i <= MAX_VALUE; i++) {
      nums.push(i);
    }

    return this.shuffleArray(nums);
  }

  shuffleArray(nums) {
    var currentIndex = nums.length, randomNum;
  
    // shuffle the numbers in the array
    while (0 !== currentIndex) {
      randomNum = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap the elements
      [ nums[currentIndex], nums[randomNum] ] = [ nums[randomNum], nums[currentIndex] ];
    }
    return nums;
  }

  render() {
    return (
      <div>
        {this.nums.map(
          (num) => <NumberButton currNum={this.state.currNum} disabled={!this.props.enableBtns} numVal={num} key={num} />
        )}
      </div>
    );
  }
}

export default NumberList;
