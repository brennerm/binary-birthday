import React, { Component } from 'react';
import './App.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: '',
      copied: false,
      day: '',
      format: 0,
      month: '',
      year: ''
    }

    this.formats = [
      {label: "DD.MM.YYYY", fn: function(day, month, year) {
        return day + '.' + month + '.' + year;
      }},
      {label: "MM/DD/YYYY", fn: function(day, month, year) {
        return month + '/' + day + '/' + year;
      }},
    ]

    this.dateChange = this.dateChange.bind(this);
    this.formatChange = this.formatChange.bind(this);
    this.dayChange = this.dayChange.bind(this);
    this.monthChange = this.monthChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
  }

  dateChange(event) {
    let day = (+this.state.day).toString(2)
    let month = (+this.state.month).toString(2)
    let year = (+this.state.year).toString(2)

    let format_function = this.formats[this.state.format].fn;

    let binary = format_function(day, month, year)
    this.setState({binary: binary});
  }

  dayChange(event) {
    let value = event.target.value;
    if (value !== '') {
        if (value < 1 || value > 31) {
            return
        }
    }

    this.setState({day: value}, function() {
      this.dateChange();
    });
  }

  formatChange(event) {
    let value = parseInt(event.target.value, 10);

    this.setState({format: value}, function() {
      this.dateChange();
    });
  }

  monthChange(event) {
    let value = event.target.value;
    if (value !== '') {
        if (value < 1 || value > 12) {
            return
        }
    }

    this.setState({month: value}, function() {
      this.dateChange();
    });
  }

  yearChange(event) {
    let value = event.target.value;
    if (value !== '' && value < 1) {
        return
    }

    this.setState({year: value}, function() {
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
          Enter your birthday
        </p>
        <input type="number" placeholder="DD" value={this.state.day} onChange={this.dayChange}/>
        .
        <input type="number" placeholder="MM" value={this.state.month} onChange={this.monthChange}/>
        .
        <input type="number" placeholder="YYYY" value={this.state.year} onChange={this.yearChange}/>

        <div>
          {this.formats.map(function(format, index){
            return <div key={index}>
              <input type="radio" name="format" value={index} onChange={this.formatChange} checked={this.state.format === index}/>
              <label>{format.label}</label>
            </div>;
          }, this)}
        </div>

        <div>
          <input type="text" value={this.state.binary}/>
        </div>
        <CopyToClipboard text={this.state.binary} onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard</button>
        </CopyToClipboard>
        <div>
          {this.state.copied ? <span style={{color: 'red'}}>Copied!</span> : null}
        </div>
      </div>
    );
  }
}

export default App;
