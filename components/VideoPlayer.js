import { useState, useEffect } from 'react';

export default function VideoPlayer({ video }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById(`video-${video.id}`);
    if (videoElement) {
      videoElement.addEventListener('click', () => {
        if (playing) {
          videoElement.pause();
          setPlaying(false);
        } else {
          videoElement.play();
          setPlaying(true);
        }
      });
    }
  }, [playing, video]);

  return (
    <div className="relative">
      <video
        id={`video-${video.id}`}
        src={video.video}
        poster={video.thumbnail}
        className="object-cover h-96 w-full"
      />
      {playing ? (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          onClick={() => setPlaying(false)}
        >
          Pause
        </button>
      ) : (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          onClick={() => setPlaying(true)}
        >
          Play
        </button>
      )}
    </div>
  );
}