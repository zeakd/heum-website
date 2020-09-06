import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import { useSpring, animated } from 'react-spring'
import { fadeInUp } from 'modules/animate';
import random from 'lodash/random';

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - pow(2, -10 * x);
}

function easeOutCirc(x) {
  return sqrt(1 - pow(x - 1, 2));
  }

export default function Wavy({
  active,
  children,
}) {
  const idRef = useRef();
  useEffect(() => {
    idRef.current = Math.random().toString(36).substring(7);
  }, [])
  const { freq, scale } = useSpring({
    reset: active,
    from: { scale: random(50, 100), freq: `${random(0.007, 0.01)}, ${random(0.007, 0.01)}` },
    to: { scale: 0, freq: `${random(0.003, 0.005)}, ${random(0.003, 0.005)}` },
    // from: { scale: 80, freq: `0.007, 0.0` },
    // to: { scale: 0, freq: `0.003, 0.0` },
    config: { duration: 1000 },
    easing: () => 1,
  })

  return (
    <Wrapper
      css={css({
        animation: active && `${fadeInUp} 1s ease`
      })}
    >
      <animated.svg
        // style={{ 
        //   width: '500px',
        //   height: '500px',
        // }}
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid meet"
        width={500}
        height={500}
      >
        <defs>
          <filter id={idRef.current}>
            <AnimFeTurbulence 
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves={1}
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap 
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={scale} 
            />
          </filter>
        </defs>
        <foreignObject width="100%" height="100%">
          <ChildWrapper 
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ filter: `url(#${idRef.current})` }} >
            {children}
          </ChildWrapper>
        </foreignObject>
      </animated.svg>
    </Wrapper>
  )
}

const Wrapper = styled.div``;
const ChildWrapper = styled.div`
  position: relative;
  width: 1200px;
  height: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* > * {
    max-width: 100%;
  } */
`;