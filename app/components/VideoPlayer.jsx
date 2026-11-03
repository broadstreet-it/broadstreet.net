import { useState } from "react";

/**
 * YouTube video that shows a local thumbnail until someone presses play, so pages stay fast
 * and YouTube isn't contacted (or allowed to set cookies) until a visitor actually watches.
 */
export default function VideoPlayer({ id, title, thumb }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="video-player">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <img src={thumb} alt="" width="960" height="540" loading="lazy" decoding="async" />
          <span className="vp-play" aria-hidden="true">▶</span>
        </button>
      )}
    </div>
  );
}
