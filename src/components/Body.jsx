import React from 'react'
import video1 from '../components/videos'

const Body = () => {
  return (
    <div className='bodybg'>
      <video src={video1} autoPlay loop muted/>
    </div>
  )
}

export default Body
