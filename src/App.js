import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = { quote: 'Loading....',
            author: 'Loading...',
            image: ''
        }

  componentDidMount() {

    const url = 'http://localhost:5000/api'
    axios.get(url)
      .then(res => {
        const quote = res.data.content;
        const author = res.data.attribution;
        this.setState({ quote, author })
      })


      
  }

  render() {
    return (
      <div className="App">
        <h1>A Daily Dose of Inspiration</h1>
        <div className="center-div">
          <p id="quoteDisplay">{this.state.quote}</p>
          <p id="authorDisplay">~ {this.state.author}</p>
        </div>  
      </div>
    );
  }
}

export default App;
