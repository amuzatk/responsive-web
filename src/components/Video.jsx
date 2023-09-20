import React, { useState } from 'react';
import YouTube from 'react-youtube';

const MyComponent = () => {
  const [error, setError] = useState(null);

  const videoId = 'https://www.youtube.com/watch?v=EIYvawQQZ0U&list=PLjz-O3tA66-YctlfYULSRO-Po6xudDrjA&index=1';

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // Add your player vars here
    },
  };

  const onPlayerError = (event) => {
    console.log('Error:', event.target);
    setError('An error occurred while loading the video.');
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={(_event) => {
          // Handle onReady if needed
        }}
        onError={onPlayerError}
      />
    </div>
  );
};

export default MyComponent;
