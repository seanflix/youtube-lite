import React from 'react'

function HTMLDecode({ htmlString }) {
  const parseHTML = (htmlString) => {
    const parser = new DOMParser();
    const decodedHTML = parser.parseFromString(htmlString, 'text/html');
    return decodedHTML.body.textContent || "";
  };

  const decodedString = parseHTML(htmlString);

  return <div>{decodedString}</div>;
}

const Videoitem = ({video, onVideoSelect}) => {
  return (
    <div className="flex sm:flex-col w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 shadow-lg border sm:rounded-2xl sm:overflow-hidden h-28 sm:h-auto" onClick={() => onVideoSelect(video)}>
      <img alt="content" className="aspect-video object-cover" src={video.snippet.thumbnails.medium.url}/>
      <div className="px-5 pt-3 pb-5 bg-white overflow-hidden">
        <h2 className="capitalize text-lg font-medium title-font text-gray-800 truncate">
          <HTMLDecode htmlString={video.snippet.title} />
          </h2>
        <p className="capitalize text-sm font-normal text-red-500">
          {video.snippet.channelTitle}
          </p>
      </div>
    </div>
  )
}

export default Videoitem