import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import Header from './components/Header';
import Search from './components/Search';
import SearchRes from './components/SearchRes';
import LikedGifs from './components/LikedGifs';

import { apiRequest, updateSearchTerm } from './actions/searchTermActions';
import { updateWeirdness } from './actions/weirdnessActions';
import { clearSearchRes } from './actions/searchResActions';
import { likeGif, unlikeGif } from './actions/likedGifsActions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm,
      toolTipOpen: false,
      loadingIndicatorRunning: false
    };

    this.onUpdateWeirdness = this.onUpdateWeirdness.bind(this)
    this.onLikeGif = this.onLikeGif.bind(this)
    this.onUnlikeGif = this.onUnlikeGif.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this)

    this.searchInput = React.createRef()
    this.searchButton = React.createRef()
    this.likeGifButton = React.createRef()
    this.calculateWeirdnessButton = React.createRef()
  }

  handleSearchTermChange(e) {
    this.setState({
      searchTerm: e.target.value,
      toolTipOpen: false
    })
  }

  handleSearchTermSubmit(e) {
    e.preventDefault();
    this.setState({
      loadingIndicatorRunning: true
    });
    this.props.onUpdateSearchTerm(this.state.searchTerm);
    this.props.onApiRequest(() => {
      this.setState({
        loadingIndicatorRunning: false
      })
    })
    this.likeGifButton.current.removeAttribute("disabled");
  }

  onUpdateWeirdness(e) {
    this.props.onUpdateWeirdness(e.target.value);
  }

  onLikeGif(e) {
    this.props.onLikeGif(JSON.parse(e.target.getAttribute("data-gif")));
    this.props.onClearSearchResult();
    this.likeGifButton.current.setAttribute("disabled", "disabled");
    this.searchInput.current.focus();
    this.searchInput.current.value = "";
    this.setState({
      toolTipOpen: this.props.likedGifs.length + 1 !== 5
    })
    if (this.props.likedGifs.length + 1 === 5) {
      this.searchButton.current.setAttribute("disabled", "disabled");
      this.calculateWeirdnessButton.current.removeAttribute("disabled");
      this.searchInput.current.blur();
    }
  }

  onUnlikeGif(e) {
    this.props.onUnlikeGif(JSON.parse(e.target.getAttribute("data-gif")));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="App">
          <div className="column">
            <Search
              handleSearchTermSubmit={this.handleSearchTermSubmit}
              handleSearchTermChange={this.handleSearchTermChange}
              searchInput={this.searchInput}
              toolTipOpen={this.state.toolTipOpen}
              searchButton={this.searchButton} />
            <SearchRes
              weirdness={this.props.weirdness}
              onLikeGif={this.onLikeGif}
              searchResult={this.props.searchResult}
              likeGifButton={this.likeGifButton}
              onUpdateWeirdness={this.onUpdateWeirdness}
              loadingIndicatorRunning={this.state.loadingIndicatorRunning} />
          </div>
          <div className="column">
            <LikedGifs
              likedGifs={this.props.likedGifs}
              onUnlikeGif={this.onUnlikeGif}
              calculateWeirdnessButton={this.calculateWeirdnessButton} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    likedGifs: state.likedGifs,
    weirdness: state.weirdness,
    searchTerm: state.searchTerm,
    searchResult: state.searchResult
  }

}

const mapActionsToProps = {
  onUpdateWeirdness: updateWeirdness,
  onUpdateSearchTerm: updateSearchTerm,
  onApiRequest: apiRequest,
  onLikeGif: likeGif,
  onUnlikeGif: unlikeGif,
  onClearSearchResult: clearSearchRes
}

export default connect(mapStateToProps, mapActionsToProps)(App)