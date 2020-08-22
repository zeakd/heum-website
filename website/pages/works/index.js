import React, { useState, useRef } from 'react';
import styled from '@emotion/styled'
import InfiniteScroll from 'components/InfiniteScroll';
// import { useRouter } from 'next/router'

export default function WorkPage () {
  // const router = useRouter();
  const videoRef = useRef();
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    // videoRef.current.muted = true;
    videoRef.current.volume = 0;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setHovered(true);
  };
  const handleMouseLeave = () => {
    videoRef.current.pause();
    setHovered(false);
  };

  return (
    <Base>
      <InfiniteScroll>
        <WorkWrapper
          blured={!hovered}
        >
          <Video 
            autoplay={false}
            ref={videoRef}
            controls={hovered}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src="/hyunseo_video.mp4" type="video/mp4" />
          </Video>
        </WorkWrapper>
      </InfiniteScroll>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <A href={'https://vimeo.com/288712938'} target='_blank'>https://vimeo.com/288712938</A>
        </p>
      </Content>
    </Base>    
  );
}

const Base = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const A = styled.a`
  pointer-events: auto;
  text-decoration: underline; 
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const WorkWrapper = styled.div`
  filter: ${({ blured }) => blured ? 'blur(8px)' : 'none'};
  transition: filter 0.3s;
`;

const Video = styled.video`
  max-width: 60%;
`