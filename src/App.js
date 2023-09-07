import React from 'react';
import './App.css';
import { Navbar, Searchbar, Videolist, Videodetail, Preview } from './components'
import { useEffect } from 'react';

import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    ApiKey1: process.env.REACT_APP_YOUTUBE_API_1
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
    // window.scroll({ behavior: 'smooth'})
    window.scrollTo({ top: 0, behavior: 'smooth'})
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
      console.log(this.state.videos);
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
    console.log(this.state.videos);
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <>
        <div className="title-font">
          <Navbar onFormSubmit={this.handleSubmit} />
          <section className="text-gray-400 bg-black pt-24 sm:pt-36 min-h-screen title-font">
            { selectedVideo?.length > 0 ? 
              ( '' ) 
              : ( <Preview video={selectedVideo} /> ) 
            }
            <div ref={(el) => { this.messagesEnd = el;}}></div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <Videolist videos={videos} onVideoSelect={this.onVideoSelect}/>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default App;
