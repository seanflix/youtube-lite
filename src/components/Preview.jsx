import React from 'react';
import './preview.css';
import { useState } from 'react';

const Preview = ({ video }) => {
  const [ theater, setTheater ] = useState(false);

  if(!video) return null
  
  // const toggleTheaterMode = () => {
  //   setTheater(!theater)
  // }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  function HTMLDecode({ htmlString }) {
    const parseHTML = (htmlString) => {
      const parser = new DOMParser();
      const decodedHTML = parser.parseFromString(htmlString, 'text/html');
      return decodedHTML.body.textContent || "";
    };
  
    const decodedString = parseHTML(htmlString);
  
    return <div>{decodedString}</div>;
  }

  return (
    <>
    {/* <button onClick={ toggleTheaterMode }>Theater Mode</button> */}
    <div className={ (theater ? 'w-full' : 'container md:px-5 mx-auto flex flex-col') }>
      <div className={ (theater ? 'w-full' : 'w-full xl:w-8/12 mx-auto sm:rounded-3xl overflow-hidden shadow-lg border') }>
        <div className="w-full">
          <div className="aspect-video">
            {
              video.id.kind === 'youtube#video' ? (
                <iframe src={'https://www.youtube.com/embed/'+video.id.videoId+'?autoplay=1'} 
                frameborder="0" 
                width="100%" 
                height="100%" 
                title="videoPlayer" 
                allow='autoplay; fullscreen'
                allowfullscreen
                ></iframe>
              ) 
              : video.id.kind === 'youtube#channel' ? (
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
          </div>
        </div>
        <div className="bg-white px-7 py-5">
          <h2 className="text-black font-semibold text-xl sm:text-2xl lg:text-3xl">
            <HTMLDecode htmlString={video.snippet.title} />
          </h2>
          <div className="flex items-end space-x-2">
            <p className="capitalize text-md md:text-lg font-semibold text-red-500">
              {video.snippet.channelTitle}
            </p>
            <p className="capitalize text-gray-500">
              {formatDate(video.snippet.publishTime)}
            </p>
          </div>
          <p className="text-gray-400 leading-relaxed mt-2">
            {video.snippet.description}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Preview