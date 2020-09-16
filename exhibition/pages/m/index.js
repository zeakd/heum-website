import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Joystick } from 'modules/joystick';

import Intro from 'views/mobile-works/intro';
import Work0 from 'views/mobile-works/0';
import Work1 from 'views/mobile-works/1';
import Work2 from 'views/mobile-works/2';
import Work3A from 'views/mobile-works/3A';
import Work3B from 'views/mobile-works/3B';
import Work3C from 'views/mobile-works/3C';
import Work4A from 'views/mobile-works/4A';
import Work4B from 'views/mobile-works/4B';
import Work4C from 'views/mobile-works/4C';
import Work5 from 'views/mobile-works/5';
import Work6A from 'views/mobile-works/6A';
import Work6B from 'views/mobile-works/6B';
import Work6C from 'views/mobile-works/6C';
import Work6D from 'views/mobile-works/6D';
import Work6E from 'views/mobile-works/6E';
import Work6F from 'views/mobile-works/6F';
import Work6G from 'views/mobile-works/6G';
import Work6H from 'views/mobile-works/6H';
import Work7A from 'views/mobile-works/7A';
import Work7B from 'views/mobile-works/7B';
import Work7C from 'views/mobile-works/7C';
import Work8A from 'views/mobile-works/8A';
import Work8B from 'views/mobile-works/8B';
import Work8C from 'views/mobile-works/8C';
import Work9A from 'views/mobile-works/9A';
import Work9B from 'views/mobile-works/9B';
import Work10A from 'views/mobile-works/10A';
import Work10B from 'views/mobile-works/10B';
import Work10C from 'views/mobile-works/10C';
import Work11A from 'views/mobile-works/11A';
import Work11B from 'views/mobile-works/11B';
import Work12A from 'views/mobile-works/12A';
import Work12B from 'views/mobile-works/12B';
import Work12C from 'views/mobile-works/12C';
import Work12D from 'views/mobile-works/12D';
import Work12E from 'views/mobile-works/12E';
import Work13 from 'views/mobile-works/13';
import Outro from 'views/mobile-works/14';
import { withPreload } from 'views/progress';

import { useTheme } from 'components/theme';
import MobileScreen from 'components/mobile/screen';
import { NonFullscreenOverlay, PortraitOverlay } from 'components/mobile/overlay';

function MobileHome() {
  const [{ screen }] = useTheme()
  const baseElemRef = useRef();
  // useEffect(() => {
  //   baseElemRef.current.requestFullscreen();
  // }, [])

  // handle pages
  const [pageIndex, setPageIndex] = useState(-1)
  const joystickRef = useRef(new Joystick());
  joystickRef.current.onForward = () => {
    setPageIndex(prev => prev < views.length - 1 ? prev + 1 : prev);
  }
  joystickRef.current.onBackward = () => {
    setPageIndex(prev => prev > 0 ? prev - 1 : 0);
  }

  useEffect(() => {
    joystickRef.current.activate();

    const id = setTimeout(() => {
      setPageIndex(prev => {
        if (prev > 0) return prev;
        return 0;
      });
    }, 2000)

    return () => {
      joystickRef.current.deactivate();
      clearTimeout(id);
    }
  }, [])

  const views = [
    <Intro />,
    <Work0 />,
    <Work1 />,
    <Work2 />,
    <Work3A />,
    <Work3B />,
    <Work3C />,
    <Work4A />,
    <Work4B />,
    <Work4C />,
    <Work5 />,
    <Work6A />,
    <Work6B />,
    <Work6C />,
    <Work6D />,
    <Work6E />,
    <Work6F />,
    <Work6G />,
    <Work6H />,
    <Work7A />,
    <Work7B />,
    <Work7C />,
    <Work8A />,
    <Work8B />,
    <Work8C />,
    <Work9A />,
    <Work9B />,
    <Work10A />,
    <Work10B />,
    <Work10C />,
    <Work11A />,
    <Work11B />,
    <Work12A />,
    <Work12B />,
    <Work12C />,
    <Work12D />,
    <Work12E />,
    <Work13 />,
    <Outro 
      onGoToFirst={() => setPageIndex(0)}
    />,
  ]

  return (
    <Base 
      ref={baseElemRef}
    >
      <Head>
        <title>PETER PIPER PICKED A PECK OF PICKLED PIPERS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="PETER PIPER PICKED A PECK OF PICKLED PIPERS" />
        <meta property="og:image" content="https://www.pickledpipers.com/works/00_1_B.jpg" />
        <meta property="og:url" content="https://www.pickledpipers.com/" />
      </Head>
      <MobileScreen 
        theme={screen}
        isFirstRender={pageIndex === 0 || pageIndex === -1}
      >
        {views[pageIndex] || null}
      </MobileScreen>
      <NonFullscreenOverlay 
        onClick={() => {
          baseElemRef.current.requestFullscreen();
        }}
      />
      <PortraitOverlay />
    </Base>
  )
}


const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (orientation: landscape) {
    :not(:fullscreen) {
      background-color: transparent;
      ${NonFullscreenOverlay} {
        display: flex;
      }   
    }
  }

  @media screen and (orientation: portrait) {
    ${PortraitOverlay} {
      display: flex;
    }
  }
`;

export default withPreload(MobileHome)