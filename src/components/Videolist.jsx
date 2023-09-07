import React from 'react'
import Videoitem from './Videoitem'

const Videolist = ({ videos, onVideoSelect }) => {
  const ListOfVideos = videos.map((video, i) => <Videoitem onVideoSelect={onVideoSelect} key={i} video={video} />)
  return ListOfVideos;
}

export default Videolist