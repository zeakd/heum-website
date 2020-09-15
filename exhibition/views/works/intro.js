import React, { useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ImageLayout,
  FlexLayout,
  DescriptionKo,
  DescriptionEn,
  Title,

} from 'components/artwork'
import { WavyFadeInUp, WavyVideo } from 'components/animate'
import { useScreen } from 'components/theme'
import Counter from 'components/counter'

export default function Work0() {
  useScreen('black');
  
  return (
    <Base>
      <ImageLayout>
        <WavyFadeInUp>
          <Image 
            src='/works/00_1_B.jpg'
            css={css`
              max-width: 500px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
    </Base>
  )
}

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-left: 42px;
  padding-bottom: 60px;
  padding-right: 42px;
  
`;

const TextContent = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

const LeftTextContent = styled.div`
  pointer-events: none;
  /* position: absolute; */
  /* bottom: 0; */
  left: 0;

  max-width: 950px;
`

const RightTextContent = styled.div`
  pointer-events: none;
  /* position: absolute; */
  /* bottom: 0; */
  right: 0;

  max-width: 802px;
`

const TitleWrapper = styled.h2`
  line-height: 37px;
  vertical-align: middle;
  width: 100%;
`;

const CounterLayout = styled(FlexLayout)`
  padding-left: 42px;
`
const Image = styled.img``
