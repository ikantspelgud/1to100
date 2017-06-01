import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{/*
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/}
        <ButtonField/>
      </div>
    );
  }
}

class ButtonField extends Component {
    constructor(){
        super();
        this.state = {
            curNumber: 1,
            buttonField: [],
        };
        for (var i = 1; i <= 100; i++){
            this.state.buttonField.push(this.renderButton(i));
        }
        this.setState({buttonField: this.shuffleArray(this.state.buttonField)});
    }
    
    render() {
        return (
        <div>
            <div className="App-header"> 
                <div className="App-intro"> 
                    Current Number: {this.state.curNumber}
                </div> 
            </div>
            <div>{this.state.buttonField}</div>
        </div>
        );
    }

    renderButton(i) {
        return (
            <NumberButton 
                value={i} 
                onClick={() => this.handleClick(i)}
            />
        );
    }
    
    handleClick(i) {
        if (i == this.state.curNumber){
            this.setState({curNumber: this.state.curNumber + 1});
        }
        this.render()
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
}   

}

class NumberButton extends Component {
    constructor() {
        super();
        this.state = {
            value: null,
        };
    }
    
    render() {
        this.state.value = this.props.value
        return (
            <button type="button" className="NumberButton" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>

        );
    }
}

export default App;
