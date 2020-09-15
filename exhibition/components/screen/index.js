import React from 'react';
import styled from '@emotion/styled'
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import {
  Title,
  Subtitle,
  DescriptionEn,
  DescriptionKo,
} from 'components/artwork'
import Left1 from './left-1'
import Left2 from './left-2'
import Right1 from './right-1'
import Right2 from './right-2'
import LeftDown from './left-down'
import RightDown from './right-down'
import { WavyFadeInUp } from 'components/animate';

export default function Screen({
  children,
  isFirst,
  theme = 'black',
}) {
  return (
    <Base>
      <Global 
        styles={css`
          body {
            background-color: ${theme === 'black' ? 'black' : 'white'};
            color: ${theme === 'black' ? 'white' : '#131309'};
            /* color: ${({ dark }) => dark ? 'white' : '#131309'}; */
            transition: background-color 0.3s;
          }
        `}
      />
      {children}
      <LeftBottom
        css={css`
          opacity: ${isFirst ? 1 : 0};
        `}
      >
        <WavyFadeInUp>
          <LeftDown />
        </WavyFadeInUp>
      </LeftBottom>
      <RightBottom
        css={css`
          opacity: ${isFirst ? 1 : 0};
        `}
      >
        <WavyFadeInUp>
          <RightDown />
        </WavyFadeInUp>
      </RightBottom>
      <LeftColumn>
        <div>
          <WavyFadeInUp>
            <Left1 />
          </WavyFadeInUp>
        </div>
        <div>
          <WavyFadeInUp>
            <Left2 />
          </WavyFadeInUp>
        </div>
      </LeftColumn>
      <RightColumn>
        <div>
          <WavyFadeInUp><Right1 /></WavyFadeInUp>
        </div>
        <div>
          <WavyFadeInUp><Right2 /></WavyFadeInUp>
        </div>
      </RightColumn>
    </Base>
  )
}

const Base = styled.div`
  transform:translateZ(0);
  position: relative;
  width: 100%;
  height: 100%;

  min-width: 1600px;
  max-width: 1920px;

  /* background-color: ${({ dark }) => dark ? 'black' : 'white'}; */
  

  /* transition: background-color 0.2s; */

  margin: auto;
`;

const LeftColumn = styled.div`
  padding-top: 32px;
  padding-left: 28px;
  position: absolute;
  left: 0;
  top: 0;
  
  > * {
    padding-bottom: 8px;
  }
`;

const RightColumn = styled.div`
  padding-top: 32px;
  padding-right: 42px;
  position: absolute;
  right: 0;
  top: 0;

  > * {
    padding-bottom: 8px;
  }
  /* flex: 1 1; */
  /* display: flex;
  justify-content: flex-end */
`;

// const LeftImg1 = styled.img`
//   max-width: 100%;
// `
// const LeftImg2 = styled.img``
// const RightImg1 = styled.img`
//   max-width: 100%;
// `
// const RightImg2 = styled.img``


const LeftBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 28px;
  padding-bottom: 44px;
`;

const RightBottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding-bottom: 44px;
  padding-right: 42px;
`;
