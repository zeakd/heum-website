import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
} from 'components/artwork'
import { WavyFadeInUp } from 'components/animate'
import { useScreen } from 'components/theme'
import { ReplaceAfter } from 'components/perf'

export default function Work7() {
  useScreen('black')

  return (
    <ArtworkLayout
      page={7}
      title={'네버랜드 / Neverland'}
      subtitle={'조현서, 2020, fabric printing, 200 x 200 cm'}
      descriptionEn={<p>
        Simply think of your happy moments. Then you can fly and reach there. The ‘un-ideal’ world that you want to forget as you age. This unchosen land in unconsciousness appears when everyone is asleep.
      </p>}
      descriptionKo={<p>
        그저 행복한 기억을 떠올려봐. 그럼 날아서 저 곳에 도착할 수 있어. 어른이 되면서 잊기를 바라는, ‘비(非)이상’의 세계. 이 선택되지 않은 세계는 무의식속에 남아있다가 모두가 잠드는 밤에 나타난다.
      </p>}
    >
      <ImageLayout
        css={css`
          padding-left: 40px;
          padding-bottom: 40px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/7_3_B.jpg'
            css={css`
              max-width: 600px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-right: 40px;
          padding-top: 40px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/7_2_B.png'
            css={css`
              max-width: 600px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-left: 1100px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/7_0_B.jpg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-right: 1000px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/7_1_B.jpg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
