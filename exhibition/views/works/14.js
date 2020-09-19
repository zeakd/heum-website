import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useScreen } from 'components/theme';

function ArrowUp (props) {
  return (
    <svg width={85} height={85} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h85v85H0z" />
        <path
          stroke="#FFF"
          strokeWidth={4}
          d="M14.716 41L43 12.716 71.284 41M43 13v61"
        />
      </g>
    </svg>
  )
}

function ArrowRight (props) {
  return (
    <svg width={85} height={85} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M85 0v85H0V0z" />
        <path
          stroke="#FFF"
          strokeWidth={4}
          d="M44 14.716L72.284 43 44 71.284M72 43H11"
        />
      </g>
    </svg>
  )
}

export default function Fin({
  onGoToFirst = () => {},
}) {
  useScreen('black');

  return (
    <Base>
      <LeftTextContent>
        <Direction onClick={onGoToFirst}>
          <A><ArrowUp /><span>GO TO FIRST</span></A>
        </Direction>
        <Direction>
          <A 
            href='https://www.instagram.com/haeummyocean/' 
            target='_blank'
            onClick={(event) => {
              if (!window.ga) return;
              ga('send', 'event', {
                eventCategory: 'Outbound Link',
                eventAction: 'click',
                eventLabel: 'https://www.instagram.com/haeummyocean/' 
              });
            }}
          ><ArrowRight /><span>INSTAGRAM</span></A>
        </Direction>
        <Direction>
        <A 
            href='http://naver.me/xDYu3QK8' target='_blank'
            onClick={() => {
              if (!window.ga) return;
              ga('send', 'event', {
                eventCategory: 'Outbound Link',
                eventAction: 'click',
                eventLabel: 'http://naver.me/xDYu3QK8' 
              });
            }}
          ><ArrowRight /><span>GALLERY MAP</span></A>
        </Direction>
      </LeftTextContent>
      <RightTextContent>
        <Paragraph>Artist Hyunseo Cho</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>Organized by Gallery Punto Blu</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>Curated byJane Lee</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>Designed by Jihye Kim</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>Online Exhibition Develped by Deokseong Kim</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>Thanks to</Paragraph>
        <Paragraph>Heeduck Son (Graphic Programmer)</Paragraph>
        <Paragraph>YeonSoo Oh (Visual Creator)</Paragraph>
        <Paragraph>Nockki (Yugyeom Kim, Seungjun Park)</Paragraph>
        <Paragraph>@Positlabs (Media Artist)</Paragraph>
        <Paragraph>Dahae Kim (Stylist)</Paragraph>
        <Paragraph>Yena Lee (Stylist)</Paragraph>
        <Paragraph>Yeji Cho (Media Artist)</Paragraph>
        <Paragraph>Eunseo Cho</Paragraph>
        <Paragraph>Mingyeong Jeon</Paragraph>
      </RightTextContent>
    </Base>
  )
}

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  margin-right: 20px;
  height: 400px;
`

const LeftTextContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 790px;
  padding-left: 42px;
  padding-bottom: 245px;
`;

const RightTextContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 802px;
  padding-right: 42px;
  padding-bottom: 32px;
`

const Direction = styled.div`
  font-size: 85px;
  letter-spacing: -1.06px;
  vertical-align: middle;
  
  * {
    vertical-align: middle;
  }

  span {
    opacity: 0.2;
    margin-left: 10px;
  }
`;

const Paragraph = styled.p`
  opacity: 0.6;
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: -0.27px;

  min-height: 1.2em;
`;

const A = styled.a`
  line-height: 0;
  cursor: pointer;
`;