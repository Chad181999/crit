import React from 'react'

function Video() {
  return (
    <div>
    <video controls autoplay
    style={{ width: '100%', height: '50%' }}>
        <source src="videosection.mp4" />
    </video>
    </div>
  )
}

export default Video