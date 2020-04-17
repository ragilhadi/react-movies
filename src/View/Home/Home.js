import React, {Component} from 'react'
import PageTittle from '../../components/pageHeader/PageTittle';
import ImageSlide from '../../components/imageSlider/ImageSlide';
import ContainerMovies from '../../components/containerMovie/ContainerMovies'
import { API_URL, API_KEY } from '../../Api/moviedb';
import { Skeleton } from 'antd';

class Home extends Component {
  state = {
    movies: [],
    nowPlaying: [],
    upComing: [],
    popular: [],
    topRated: [],
    currentPage: 0,
    totalPage: 0,
    searchTerm: '',
  }

  componentDidMount(){
    const PopularMovie = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const NowPlayingMovie = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    const UpComingMovie = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    const TopRated = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    this.fetchDataNowPlaying(NowPlayingMovie)
    this.fetchDataPopular(PopularMovie)
    this.fetchDataUpcoming(UpComingMovie)
    this.fetchDataTopRated(TopRated)
  }

  fetchDataNowPlaying = (respone) => {
    fetch(respone)
    .then(result => result.json())
    .then(result => {
      this.setState({
        nowPlaying: [...this.state.nowPlaying, ...result.results.slice(0,6)]
      })
    })
  }

  fetchDataPopular = (respone) => {
    fetch(respone)
    .then(result => result.json())
    .then(result => {
      this.setState({
        popular: [...this.state.popular, ...result.results.slice(0,8)]
      })
    })
  }

  fetchDataUpcoming = (respone) => {
    fetch(respone)
    .then(result => result.json())
    .then(result => {
      this.setState({
        upComing: [...this.state.upComing, ...result.results.slice(0,8)]
      })
    })
  }

  fetchDataTopRated = (respone) => {
    fetch(respone)
    .then(result => result.json())
    .then(result => {
      this.setState({
        topRated: [...this.state.topRated, ...result.results.slice(0,8)]
      })
    })
  }
  render(){
    return (
        <div style={{ margin: '0 150px'}}>

          {this.state.nowPlaying.length === 0 ? 
            <div style={{marginTop: '150px'}}>
              <Skeleton active />
              <Skeleton active />
            </div>
            :
            <>
            <PageTittle 
              tittle='Movies'
              subtittle="Now Playing"
            />

            <ImageSlide 
              data={this.state.nowPlaying}
            />

            <ContainerMovies
              tittle='Movies'
              subtittle='Popular'
              data={this.state.popular}
              button='See More'
            />

            <ContainerMovies
              tittle='Movies'
              subtittle='Up Coming'
              data={this.state.upComing}
              button='See More'
            />

            <ContainerMovies
              tittle='Movies'
              subtittle='Top Rated'
              data={this.state.topRated}
              button='See More'
            />
            </>
          }

        

      </div>
    )
  }
}


export default Home
