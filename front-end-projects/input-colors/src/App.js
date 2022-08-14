import React, { Component } from 'react';
import colors from './data';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      selectedColor: ''
    }
  }
  
  
  setFilterValue(event) {
    this.setState({ selectedColor: event.target.value })
  }

  
  
  render() {

    const colorFiltered = colors.filter((color) => color.color.includes(this.state.selectedColor))

    const list = colorFiltered.map(({ color, value }) => {
      return <li key={value} style={{ background: value }}>{color}</li>
    })
    return (
      <main>
        <input type="text" placeholder="Digite uma cor" onChange={(event) => this.setFilterValue(event)}></input>

        <ul>
          {list}
        </ul>
      </main>
    );
  }
}

export default App;
