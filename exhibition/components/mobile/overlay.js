import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function _PortraitOverlay({
  className,
}) {
  return (
    <Overlay className={className}>
      <Shade css={css`
        opacity: 1;
      `}/>
      <Content>
        <p>Please rotate your device.</p>
        <p>기기를 가로로 돌려주세요.</p>
      </Content>
    </Overlay>
  )
}

export const PortraitOverlay = styled(_PortraitOverlay)`
  display: none;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  /* z-index: 9999; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* background-color: black; */
`;

const Content = styled.div`
  position: relative;
  /* display: inline-block; */
  text-align: center;

  p {
    margin-bottom: 20px;
  }
`


function _NonFullscreenOverlay(props) {
  return (
    <Overlay {...props}>
      <Shade />
      <Content>
        <p>Please touch to use fullscreen.</p>
        <p>전체화면 보기를 위해 터치해주세요</p>
      </Content>
    </Overlay>
  )
}

const Shade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: black;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`

export const NonFullscreenOverlay = styled(_NonFullscreenOverlay)`
  display: none;
`;