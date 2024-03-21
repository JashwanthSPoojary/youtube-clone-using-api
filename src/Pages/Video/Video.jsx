import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVIdeo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} categoryId = {categoryId} />
    </div>
  )
}

export default Video