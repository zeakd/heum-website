import React, { useRef, useEffect, useState } from 'react';
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
  width,
  height,
}) {
  const [id, setId] = useState();
  // const idRef = useRef();
  useEffect(() => {
    // idRef.current = Math.random().toString(36).substring(7);
    setId(Math.random().toString(36).substring(7));
  }, [])

  // const { freq, scale } = useSpring({
  //   reset: active,
  //   from: { scale: random(50, 100), freq: `${random(0.007, 0.01)}, ${random(0.007, 0.01)}` },
  //   to: { scale: 0, freq: `${random(0.003, 0.005)}, ${random(0.003, 0.005)}` },
  //   config: { duration: 1000 },
  //   easing: () => 1,
  // })

  const { freq, scale } = useSpring({
    reset: active,
    from: { scale: 60, freq: `0.008, 0.008` },
    to: { scale: 0, freq: `0.003, 0.007` },
    config: { duration: 1000 },
    // easing: () => 1,
  })

  // console.log(idRef.current)

  return (
    <Wrapper
      // css={css({
      //   animation: active && `${fadeInUp} 1s ease`
      // })}
    >
      <animated.svg
        viewBox={`0 0 ${width || 1000} ${height || 1000}`}
        // preserveAspectRatio="xMidYMid meet"
        style={{ 
          position: 'absolute',
          opacity: 0,
        }}
        width={width}
        height={height}
      >
        <defs>
          <filter id={id} filterUnits="userSpaceOnUse">
            <AnimFeTurbulence 
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves={1}
              result="TURB"
              seed="1"
            />
            <AnimFeDisplacementMap 
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={scale} 
              // scale={100} 
            />
          </filter>
        </defs>
          {/* <rect x="0" y="0" width="200" height="200" style={{ filter: `url(#${id})` }} /> */}
      </animated.svg>
      <ChildWrapper 
        style={{ filter: `url(#${id})` }} >
        {children}
      </ChildWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``;
const ChildWrapper = styled.div`
  position: relative;
  /* width: 400px; */
  /* height: 400px; */

  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    max-width: 100%;
  }
`;