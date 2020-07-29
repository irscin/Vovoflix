import React from 'react'
import '../styles/MainView.css'

function VideoDescription({description}) {
    return (
        <div>
            <p className='VideoDescription'>{description.split(' ').slice(0, 50).join(' ')}</p>
        </div>
    )
}

export default VideoDescription
