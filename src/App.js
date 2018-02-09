import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import Pictures from './Components/Pictures';
import NavBar from './Components/NavBar';

import './App.css';
import axios from 'axios';
import apiConfig from './config';

class App extends Component {
  state = {
    pics: [],
    loading: true,
    queryString: window.location.pathname.split('/')[1] || "dogs"
  }

  handleSubmit(e) {
    e.preventDefault();
    this.performSearch(this.state.queryString);
  }

  handleDefaultOptions(query) {
    this.setState({ queryString: query });
    this.performSearch(query);
  }

  getQueryString(e) {
    if(e.target.value === "") {
      this.setState({ queryString: "dogs" });
    }
    this.setState({ queryString: e.target.value })
  }

  performSearch(query=this.state.queryString) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiConfig.apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({ 
            pics: response.data.photos.photo,
            loading: false 
          });
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
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" render={() => (
                  <div>
                    <NavBar handleDefault={(q) => this.handleDefaultOptions(q)} />
                    <Pictures pictures={this.state} />
                  </div>
                  )} 
                />
                <Route exact path="/search" render={() => (
                  <div>
                  <SearchForm 
                    onSearch={e => this.handleSubmit(e)}
                    onType={(e) => this.getQueryString(e)}
                  />
                  <NavBar handleDefault={(q) => this.handleDefaultOptions(q)} />
                  <Pictures pictures={this.state} />
                  </div>
                )}
                />
                <Route exact path="/cat" render={() => (
                  <div>
                    <NavBar handleDefault={(q) => this.handleDefaultOptions(q)} />
                    <Pictures pictures={this.state} />
                  </div>
                  )} />
                <Route exact path="/dog" render={() => (
                  <div>
                    <NavBar handleDefault={(q) => this.handleDefaultOptions(q)} />
                    <Pictures pictures={this.state} />
                  </div>
                  )} />
                <Route exact path="/coffee" render={() => (
                  <div>
                    <NavBar handleDefault={(q) => this.handleDefaultOptions(q)} />
                    <Pictures pictures={this.state} />
                  </div>
                  )} />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
