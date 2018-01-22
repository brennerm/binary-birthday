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
    let value = event.target.value;
    if (value < 1 || value > 31) {
        return
    }

    this.setState({day: event.target.value}, function() {
      this.dateChange();
    });
  }

  monthChange(event) {
    let value = event.target.value;
    if (value < 1 || value > 12) {
        return
    }

    this.setState({month: event.target.value}, function() {
      this.dateChange();
    });
  }

  yearChange(event) {
    let value = event.target.value;
    if (value < 1) {
        return
    }

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
        <input type="number" placeholder="DD" value={this.state.day} onChange={this.dayChange}/>
        .
        <input type="number" placeholder="MM" value={this.state.month} onChange={this.monthChange}/>
        .
        <input type="number" placeholder="YYYY" value={this.state.year} onChange={this.yearChange}/>

        <div>
          <input type="radio" name="title"/><label>DD.MM.YYYY</label>
          <input type="radio" name="title"/><label>MM/DD/YYYY</label>
        </div>

        <div>
          <input type="text" value={this.state.binary}/>
        </div>
      </div>
    );
  }
}

export default App;
