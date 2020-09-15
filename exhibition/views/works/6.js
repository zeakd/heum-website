import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
} from 'components/artwork'
import { WavyVideo, WavyFadeInUp } from 'components/animate'
import { useScreen } from 'components/theme'

export default function Work5() {
  useScreen('white')

  return (
    <ArtworkLayout
      page={6}
      title={'산책 / A walk (1,2,4)'}
      subtitle={'녹기(김유겸, 박승준), 조현서, 2020, multi material on arcylic , 60cm x 85 cm'}
      descriptionEn={<p>
        I wonder how my experience and life is edited and archived in memory. They are jumbled in photos, magazines, texts, and many others.
      </p>}
      descriptionKo={
      <>
        <p>내가 보고 경험했던 일상은 지금 어떤 기억으로 편집되어 남아있을까. 사진, 잡지, 텍스트, 다양한 방법으로 기억된 정보가 혼재한다.</p>
        <p>{"<"}작가의 말{">"}자연스러운 일상들을 수많은 포맷으로 기억한다고 하였을 때, “자연스러움”을 가장 직관적인 형태인 “자연”으로 표현해 자연을 담을 수 있는 다양한 요소들을 수집하고, 이를 콜라주해 프레임에 포장한 포스터 시리즈입니다.</p>
      </>}
    >
      <ImageLayout>
        <WavyVideo
          fallbackImage={<Image 
            src='/works/6_0_W.png'
            css={css`
              max-width: 900px;
            `}
          />}
          css={css`
            max-width: 900px;
          `}
        >
          <source src="/works/6_0_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
      <ImageLayout
        justifyContent='flex-end'
        alignItems='flex-end'
        css={css`
          padding-right: 42px;
          padding-bottom: 32px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/6_0_1_W.jpg'
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
