import React from 'react'

const Videoitem = ({video, onVideoSelect}) => {
  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300" onClick={() => onVideoSelect(video)}>
        <div className="h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={video.snippet.thumbnails.medium.url}/>
        </div>
        <div className="px-3 py-2 bg-white bg-opacity-5">
          <h2 className="capitalize text-xl font-medium title-font text-white truncate">{video.snippet.title}</h2>
          <p className="capitalize text-md font-bold text-yellow-500">{video.snippet.channelTitle}</p>
        </div>
    </div>
  )
}

export default Videoitem