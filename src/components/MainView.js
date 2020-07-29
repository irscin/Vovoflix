import React, { useState } from 'react'
import videoService from '../services/videos'
import VideoContainer from './VideoContainer'
import VideoTitle from './VideoTitle'
import VideoDescription from './VideoDescription'

function MainView() {
    //State para setar a URL do background assim que for baixada
    const [url, setURL] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    let youtubeID='DfbJC6M20TY'
    //Passo o ID do vídeo e pego a thumbnail com maior resolução
    videoService.get(youtubeID).then(res=>{
        setURL(res.items[0].snippet.thumbnails.maxres.url)
        setTitle(res.items[0].snippet.localized.title)
        setDescription(res.items[0].snippet.description)
        console.log(res.items[0]);
    })
    const MainViewContainerStyle={
        backgroundImage: `url(${url})`
    }
    return (
        <div className='MainViewContainer' style={MainViewContainerStyle}>
            <VideoContainer youtubeID={youtubeID} className='VideoContainer'/>
            <div className='TextVideo'>
                <VideoTitle title={title}/>
                <VideoDescription description={description}/>    
            </div>
        </div>
    )
}

export default MainView
