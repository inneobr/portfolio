import React, { useState, useRef , useEffect } from 'react'
import { motion, useForceUpdate } from 'framer-motion';
import { fadeIn } from '../../variants';

import { HiPlay, HiStop } from 'react-icons/hi'

function usePlayState($videoPlayer){  
  const [ playerState, setPlayerState ] = useState({
    playing: false,
    percentage: 0,
    time: 0,
  }); 
  
  useEffect(() => {
    playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();
  }, [
    playerState.playing
  ]);

  function toggleVideoPlay() {    
    setPlayerState({
      ...playerState,
      playing: !playerState.playing
    })
  }

  function handleTimeUpdate() {
    const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
    let current = parseInt(currentPercentage / 10) * 10;
    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
      time: current + '%',
      duration: $videoPlayer.current.duration
    })  
  }

  function handleChangeVideoPercentage(event) {
    const currentPercentageValue = event.target.value;
    $videoPlayer.current.currentTime =  $videoPlayer.current.duration / 100 * currentPercentageValue;

    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue,
    })
  }

  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage
  }
}

const Services = () => { 
  const $videoPlayer = useRef(null); 
  const {playerState, toggleVideoPlay, handleTimeUpdate, handleChangeVideoPercentage }  = usePlayState($videoPlayer); 
 
  return (
    <section className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex  justify-center h-full w-full '>
        <div className='flex w-full rounded-lg overflow-hidden mx-auto'>
          <div class="flex flex-col">
            <div class="relative items-center justify-center">
              <video src='../../video.mp4' 
                ref={$videoPlayer}
                onTimeUpdate={handleTimeUpdate}
                className='rounded xl:w-[1080px]'
                poster=''/>
            </div>

            <div>
              <div>
                <input onChange={handleChangeVideoPercentage}
                  value={playerState.percentage } 
                  type='range' min='0' max='100' 
                  className='relative h-1 bg-gray-200 w-full bg-green-500 '/>
              </div>
              <div class="flex justify-between text-xs font-medium text-gray-500 items-center p-2">
                <div className='min-w-[25px]'>{ playerState.time }</div>

                <div class="flex items-center justify-center">
                  <button onClick={ toggleVideoPlay } className='focus:outline-none text-white-900'>
                      <div className='text-[25px]'>{ playerState.playing ?  <HiStop /> : <HiPlay />}</div>                        
                  </button>
                </div>

                <div className='min-w-[25px]'>100%</div>
              </div>
              
            </div>
            <motion.h2 
                variants={fadeIn('down', 0.3)} 
                initial="hidden" 
                animate="show"  
                exit="hidden"className='text-[18px] w-full text-center my-8 bt-2 rounded border border-white/50 py-8'>
                  Video player desenvolvido em <span className='text-accent font-bold'>react</span>, com controles personalizados. 
              </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
