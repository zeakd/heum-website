import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useScreen } from 'components/theme';
import { 
  FlexLayout,
  ImageLayout,
} from 'components/artwork'
import Counter from 'components/counter'
import { WavyFadeInUp } from 'components/animate';

export default function Outro() {
  useScreen('black');

  return (
    <Base>
      <ImageLayout
        css={css`
          padding-right: 200px; 
          padding-bottom: 120px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/fin_2_B.jpeg'
          />
        </WavyFadeInUp>
        <WavyFadeInUp>
          <Image 
            src='/works/fin_3_B.jpeg'
          />
        </WavyFadeInUp>
      </ImageLayout>
      <LeftTextContent>
        <Title>
          <p>PICKED PIPERS</p>
          <p>PETER PIPER PICKED A PECK OF PICKED PIPERS.</p>
        </Title>
        <Paragraph>
          Hyunseo Cho 1st solo exhibition
        </Paragraph>
      </LeftTextContent>
      <RightTextContent>
        <Title
          css={css`
            margin-bottom: 20px;
          `}
        >
          <p>HYUNSEO CHO</p>
        </Title>
        <Paragraph>
          조현서는 멀티미디어 아티스트로 대한민국 서울을 기반으로 한 브랜드 디자이너다. 그녀의 작품은 설치와 미디어 아트에서부터 브랜드 아이덴티티와 전시 디자인에 이르기까지 다양하다. 예술가로서나 디자이너로서, 그녀는 자신의 작품과 고객들의 작품과 디지털 예술작품의 균형을 맞춘다.
        </Paragraph>
        <Paragraph>
          Hyunseo Cho is a multi-media artist and a brand designer based on Seoul, Republic of Korea. Her works range from installation and media art to the brand identity and exhibition design. Both as an artist and a designer, she balances her own work and the ones of the clients with digital artworks.
        </Paragraph>
        <br />
        <Paragraph>
          www.hyunseocho.com
        </Paragraph>
        <Paragraph>
          @haeummyocean
        </Paragraph>
        <br />
        <Title
          css={css`
            margin-top: 20px;
            margin-bottom: 8px;
          `}
        >
          <p>GALLERY PUNTOBLU</p>
        </Title>
        <Paragraph>
          M-F 11-22 | Sat 14-22
        </Paragraph>
        <Paragraph>
          61, Seongsui-ro 22-gil, Seongdong-gu, Seoul, Republic of Korea
        </Paragraph>
        <Paragraph>
          @puntoblueseoul
        </Paragraph>
      </RightTextContent>
      <CounterLayout
        justifyContent='flex-start'
        alignItems='center'
      >
        <Counter 
          page={13}
          size={13}
        />
      </CounterLayout>
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
  padding-bottom: 32px;
`;

const RightTextContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 802px;
  padding-right: 42px;
  padding-bottom: 32px;
`

const Title = styled.h2`
  opacity: 0.6;
  font-size: 24px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.3px;
`;

const Paragraph = styled.p`
  opacity: 0.6;
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: -0.27px;
`


const CounterLayout = styled(FlexLayout)`
  padding-left: 42px;
`