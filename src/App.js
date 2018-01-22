import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: '',
      day: '',
      month: '',
      year: ''
    }

    this.dayChange = this.dayChange.bind(this);
    this.monthChange = this.monthChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
  }

  dateChange(event) {
    let day = (+this.state.day).toString(2)
    let month = (+this.state.month).toString(2)
    let year = (+this.state.year).toString(2)

    let binary = day + '.' + month + '.' + year
    this.setState({binary: binary});
  }

  dayChange(event) {
    this.setState({day: event.target.value}, function() {
      this.dateChange();
    });
  }

  monthChange(event) {
    this.setState({month: event.target.value}, function() {
      this.dateChange();
    });
  }

  yearChange(event) {
    this.setState({year: event.target.value}, function() {
      this.dateChange();
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Binary Birthday</h1>
        </header>
        <p className="App-intro">
          Enter a birthday to get the equivalent binary representation.
        </p>
        <input type="number" placeholder="DD" min="1" max="31" value={this.state.day} onChange={this.dayChange}/>
        .
        <input type="number" placeholder="MM" min="1" max="12" value={this.state.month} onChange={this.monthChange}/>
        .
        <input type="number" placeholder="YYYY" min="0" max="9999" value={this.state.year} onChange={this.yearChange}/>

        <div>
          <input type="text" value={this.state.binary}/>
        </div>
      </div>
    );
  }
}

export default App;
