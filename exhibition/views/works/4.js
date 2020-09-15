import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
  Video,
} from 'components/artwork'
import { 
  WavyFadeInUp,
  WavyVideo,
} from 'components/animate'
import { ReplaceAfter } from 'components/perf'
import { useScreen } from 'components/theme'

export default function W2() {
  useScreen('white')

  return (
    <ArtworkLayout
      page={4}
      title={'Warp'}
      subtitle={'손희덕, 조현서 @positlabs, 2020, Instagram filter , monitor, 160 x 80 cm'}
      descriptionEn={<p>
        Warp is both the bending or twristing the appearance of the subject and the port that transports one from the real world to another at superluminal speed. People reflect and warp, and travel to the other world by editing themselves.
      </p>}
      descriptionKo={<p>
        왜곡 이펙트 : @tto_kee, 번짐 효과 : @positlabswarp는 어떤 사물이나 사람이 더이상 평평하거나 똑바르게 보이지 않도록 구부리거나 비틀어서 왜곡함을 뜻함과 동시에 시공간을 왜곡해서 현실세계에서 다른 세계로 초광속 이동을 하는 문을 말한다. 사람들은 자신을 비추며 왜곡시키고, 보정해서 또 다른 세계에 들어간다. 이 작품은 인스타그램 필터 갤러리에서 경험할 수 있다.
      </p>}
    >
      <ImageLayout>
        <WavyVideo
          fallbackImage={<Image 
            src='/works/4_1_W.png'
            css={css`
              max-width: 1000px;
            `}
          />}
          css={css`
            max-width: 1000px;
          `}
        >
          <source src="/works/4_1_W_1.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-left: 1000px;
        `}
      >
        <WavyVideo
          fallbackImage={<Image 
            src='/works/4_3_W.png'
            css={css`
              max-width: 300px;
              
            `}
          />}
          css={css`
            max-width: 300px;
          `}
        >
          <source src="/works/4_3_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-right: 1000px;
        `}
      >
        <WavyVideo
          fallbackImage={<Image 
            src='/works/4_2_W.png'
            css={css`
              max-width: 300px;
            `}
          />}
          css={css`
            max-width: 300px;
          `}
        >
          <source src="/works/4_2_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
