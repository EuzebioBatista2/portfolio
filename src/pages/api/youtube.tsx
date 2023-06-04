import { useState } from 'react';
import Youtube from 'react-youtube'

interface IVideoPlayProps {
    className: string
    link: string
}
const VideoPlay = (props: IVideoPlayProps) => {
    const [player, setPlayer] = useState<any>(null);

    const opts = {
        playerVars: {
            mute: 1,
        }
    }

    const onReady = (event: any) => {
        setPlayer(event.target);
        event.target.playVideo();
        event.target.setPlaybackRate(2)
    };
    
    const onStateChange = (event: any) => {
        if (event.data === 0) {
          player.seekTo(0);
          player.playVideo();
        }
    };

    return (
        <Youtube 
            videoId={props.link} 
            opts={opts} 
            iframeClassName={`w-full h-full`}
            className={`${props.className}`}
            onReady={onReady}
            onStateChange={onStateChange}
        />
    )
}

export default VideoPlay