import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import Pictures from './Components/Pictures';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import apiConfig from './config';

class App extends Component {
  state = {
    pics: [],
    loading: true
  }

  handleSubmit(e) {
    e.preventDefault();
    this.performSearch();
  }

  performSearch(query = 'cats') {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiConfig.apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({ 
            pics: response.data.photos.photo,
            loading: false 
          });
          console.log(response.data.photos.photo);
        })
        .catch(err => {
          console.log('There was an error loading photo data', err);
        });
  }

  componentDidMount() {
    this.performSearch();
  }

  render() {
    return (
      <div>
          <SearchForm onSearch={(e) => this.handleSubmit(e)} />
          <Pictures pictures={this.state} />
      </div>
    );
  }
}

export default App;