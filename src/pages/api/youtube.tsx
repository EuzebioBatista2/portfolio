import { useState } from 'react';
import Youtube from 'react-youtube'

interface IVideoPlayProps {
    className: string
    link: string
}
const VideoPlay = (props: IVideoPlayProps) => {
    const [player, setPlayer] = useState<any>(null);

    let page: any
    if (typeof window !== 'undefined') { page = window.location.origin }
    
    const opts = {
        playerVars: {
            mute: 1,
            origin: page
        }
    }

    const onReady = (event: any) => {
        setPlayer(event.target);
        event.target.playVideo();
        event.target.setPlaybackRate(2)
    };
    
    const onEnd = () => {
        player.playVideo();
    };

    return (
        <Youtube 
            videoId={props.link} 
            opts={opts} 
            iframeClassName={`w-full h-full`}
            className={`${props.className}`}
            onReady={onReady}
            onEnd={onEnd}
        />
    )
}

export default VideoPlay