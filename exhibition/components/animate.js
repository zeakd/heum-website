import { useEffect, useState, useMemo, useCallback } from 'react';
import Wavy from './Wavy';
/** @jsx jsx */
import { keyframes, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring'
import { ReplaceAfter } from 'components/perf'
import { Video } from 'components/artwork'
// import { fadeInUp } from 'modules/animate';
import random from 'lodash/random';
import { rest } from 'lodash';

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export const fadeInUp = keyframes`
  from {
    opacity: 0.7;
    /* transform: translate3d(0, 5%, 0); */
    transform: translateY(5%);
  }

  to {
    opacity: 1;
    /* transform: translate3d(0, 0, 0); */
    transform: translateY(0);
  }
`

export const FadeInUp = styled.div`
  opacity: 0;

  ${({ active }) => active && css`
    opacity: 1;
    animation: ${fadeInUp} 1s ease;
  `}
`

export function WavyFadeInUp ({ children }) {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => {
      setAnimate(true);
      start();
    }, 10)
    return () => {
      clearTimeout(id);
    }
  }, [])

  const [elem, filterId, start] = useWavyFilter();

  return (
    <FadeInUp active={animate}>
      <WavyWrapper
        css={css`
          ${filterId && css`filter: url(#${filterId});`}
        `}
      >
        {children}
      </WavyWrapper>
      {elem}
    </FadeInUp>
  )
}

export const WavyWrapper = styled.div``;

export function useWavyFilter({
  width,
  height,
} = {},  deps) {
  const [id, setId] = useState(); 
  useEffect(() => {
    setId(Math.random().toString(36).substring(7));
  }, [])

  
  const [{ freq, scale }, set] = useSpring(
    () => ({ 
      scale: 60, freq: `0.008, 0.008`,
      config: { duration: 1000 },
      // reset: true,
    })
    // {
    // reset: true,
    // from: { scale: 60, freq: `0.008, 0.008` },
    // to: { scale: 0, freq: `0.003, 0.007` },
    // config: { duration: 1000 },
    // // easing: () => 1,
    // }
  )
  const start = useCallback(() => {
    set({ scale: 0, freq: `0.003, 0.007` })
  }, [])

  const elem = (
    <animated.svg
      viewBox={`0 0 ${width || 2000} ${height || 2000}`}
      style={{ 
        position: 'fixed',
        opacity: 0,
        pointerEvents: 'none',
        top: 0,
        left: 0,
      }}
      width={width || 2000}
      height={height || 2000}
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
    </animated.svg>
  )

  return [elem, id, start];
}


// TODO: Safari Only
export function WavyVideo({
  fallbackImage,
  ...restProps
}) {
  return (
    <ReplaceAfter
      after={
        <Video
          {...restProps}
        />
      }
    >
      <WavyFadeInUp>
        {fallbackImage}
      </WavyFadeInUp>
    </ReplaceAfter>
  )
}