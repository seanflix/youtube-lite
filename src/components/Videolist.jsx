import React from 'react'
import Videoitem from './Videoitem'

const Videolist = ({ videos, onVideoSelect }) => {
  const ListOfVideos = videos.map((video, i) => <Videoitem onVideoSelect={onVideoSelect} key={i} video={video} />)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 py-4 sm:py-5">
      { ListOfVideos }
    </div>
  );
}

export default Videolist