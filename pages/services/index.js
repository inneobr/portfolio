import React, { useState } from 'react'

const Services = () => {
  const [link, setLink] = useState('')

  const handleChange = (event) => {
    var url = "https://www.youtube.com/embed/" + event.target.value.substr("https://www.youtube.com/watch?v=".length)+"?autoplay=1";
    localStorage.setItem("uuid", url);
    setLink(url);
  };
  
  return (
    <div className="flex h-full bg-primery/30 py-40 justify-center">
      <div className="w-[100%] xl:w-[60%]  items-center justify-center">
        {link && (
          <iframe className="w-[100%] h-[48%] xl:w-[100%] xl:h-[100%] items-center justify-center" 
            src={link}
            title="Player Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen="true"
            autoplay="true"/>
        )}
        <input className="w-full m-2 p-2 mx-1 rounded-[3px] text-black" type="text" onChange={handleChange} placeholder="link youtube." />     
      </div>
    </div>
  );
};

export default Services;
