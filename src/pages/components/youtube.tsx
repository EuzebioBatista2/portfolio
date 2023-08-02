import { useState } from 'react';
import Youtube from 'react-youtube'

interface IVideoPlayProps {
  className: string
  link: string
}
const VideoPlay = (props: IVideoPlayProps) => {
  const [player, setPlayer] = useState<any>(null);

  // Variável configurada para mutar o vídeo
  const opts = {
    playerVars: {
      mute: 1,
    }
  }

  // Variável configurada para ativar o play assim que a página for carregada e aumentar a taxa de velocidade em 2x
  const onReady = (event: any) => {
    setPlayer(event.target);
    event.target.playVideo();
    event.target.setPlaybackRate(2)
  };

  // Variável configurada para rodar o vídeo novamente, assim que ele finalizar
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
      style={{ boxShadow: '-5px 7px 5px 0px rgba(0,0,0,0.75)' }}
    />
  )
}

export default VideoPlay