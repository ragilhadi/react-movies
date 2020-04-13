import React, { Component } from 'react';
import TopNav from './components/header/TopNav';
import ImageSlide from './components/imageSlider/ImageSlide';
import ItemCard from './components/itemCard/ItemCard';
import { API_URL, API_KEY } from './Api/moviedb';

class App extends Component {
  state = {
    movies: [],
    nowPlaying: [],
    currentPage: 0,
    totalPage: 0,
    searchTerm: '',
  }

  componentDidMount(){
    const PopularMovie = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const NowPlayingMovie = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    const UpComingMovie = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    this.fetchData(NowPlayingMovie)
  }

  fetchData = (respone) => {
    fetch(respone)
    .then(result => result.json())
    .then(result => {
      this.setState({
        nowPlaying: [...this.state.nowPlaying, ...result.results]
      })
    })
  }

  render(){
  return (
    <div className="App">
      <TopNav />
      <div style={{ margin: '0 150px'}}>
      <ImageSlide data={this.state.nowPlaying}/>
      <ItemCard />
      </div>
    </div>
  )
  }
}

export default App;
