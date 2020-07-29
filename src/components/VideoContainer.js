import React from 'react'
import '../styles/MainView.css'

function VideoContainer({youtubeID}) {
    return (
        <div className='VideoContainer'>
            <iframe src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title='iFrame title'/>
        </div>
    )
}

export default VideoContainer
