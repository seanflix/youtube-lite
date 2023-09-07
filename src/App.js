import React from 'react';
import './App.css';
import { Navbar, Videolist, Preview } from './components'

import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    ApiKey1: process.env.REACT_APP_YOUTUBE_API_2
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
    // window.scroll({ behavior: 'smooth'})
    window.scrollTo({ top: 0, behavior: 'smooth'})
    console.log(video.snippet);
    this.handleSubmit(video.snippet.title);
  }

  componentDidMount() {
    const generateResults = async () => {
      const response = await youtube.get('search', { 
        params: {
          part: 'snippet',
          maxResults: 8,
          key: this.state.ApiKey1,
          q: 'New Latest',
        }
      });
  
      this.setState({ videos: response.data.items})
    }
    generateResults()
  }
  
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 8,
        key: this.state.ApiKey1,
        q: searchTerm,
      }
    });

    this.setState({ videos: response.data.items})
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <>
        <div className="title-font">
          <Navbar onFormSubmit={this.handleSubmit} />
          <section className="text-gray-400 bg-white pt-[89px] sm:pt-36 min-h-screen title-font">
            { selectedVideo?.length > 0 ? 
              ( '' ) 
              : ( <Preview video={selectedVideo} /> ) 
            }
            <div ref={(el) => { this.messagesEnd = el;}}></div>
            <div className="container sm:px-5 py-10 sm:py-20 mx-auto">
              <Videolist videos={videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default App;
