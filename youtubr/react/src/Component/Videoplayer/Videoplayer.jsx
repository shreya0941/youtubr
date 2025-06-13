import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        ></iframe>
      </div>
      <h2 style={{ marginTop: '10px' }}>Awesome Video Title</h2>
      <p>Channel Name • 1M views • 1 year ago</p>
    </div>
  );
};

export default VideoPlayer;
