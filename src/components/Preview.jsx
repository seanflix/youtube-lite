import React from 'react';
import './preview.css';
import { useState } from 'react';

const Preview = ({ video }) => {
  const [ theater, setTheater ] = useState(false);

  if(!video) return null
  
  const toggleTheaterMode = () => {
    setTheater(!theater)
  }

  console.log(video);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <>
    {/* <button onClick={ toggleTheaterMode }>Theater Mode</button> */}
    <div className={ (theater ? 'w-full' : 'container md:px-5 mx-auto flex flex-col') }>
      <div className={ (theater ? 'w-full' : 'w-full xl:w-8/12 mx-auto border border-white border-opacity-5') }>
        <div className="w-full overflow-hidden">
          <div className="video-container">
          {
            video.id.kind == 'youtube#video' ? (
              <iframe src={'https://www.youtube.com/embed/'+video.id.videoId+'?autoplay=1'} 
              frameborder="0" 
              width="100%" 
              height="100%" 
              title="videoPlayer" 
              allow='autoplay; fullscreen'
              allowfullscreen
              ></iframe>
            ) 
            : video.id.kind == 'youtube#channel' ? (
              <iframe src={'https://www.youtube.com/embed/?listType=user_uploads&list='+video.snippet.title} 
              frameborder="0" 
              width="100%" 
              height="100%" 
              title="videoPlayer" 
              allow='autoplay; fullscreen'
              allowfullscreen
              ></iframe>
            ) : null
          }
            {/* <iframe src={videoSrc} frameborder="0" width="100%" height="100%" title="videoPlayer" allow='autoplay'></iframe> */}
          </div>
        </div>
        <div className="bg-white bg-opacity-5 px-4 py-3">
          <h2 className="text-white bold text-xl sm:text-2xl lg:text-3xl">{video.snippet.title}</h2>
          <div className="flex items-end space-x-2">
            <p className="capitalize text-md md:text-lg font-bold text-yellow-500">{video.snippet.channelTitle}</p>
            <p className="capitalize text-gray-500">{formatDate(video.snippet.publishTime)}</p>
          </div>
          <p className="leading-relaxed mt-2">{video.snippet.description}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Preview