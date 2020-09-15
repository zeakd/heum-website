import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
} from 'components/artwork'
import { WavyFadeInUp, WavyVideo } from 'components/animate'
import { useScreen } from 'components/theme'
import { ReplaceAfter } from 'components/perf'

export default function Work9() {
  useScreen('black')

  return (
    <ArtworkLayout
      page={9}
      title={'레이어드 / Layered'}
      subtitle={'조현서, 김다해, 이예나, 조예지, 2020, film, 1080 x 1920 px'}
      descriptionEn={<p>
        My many faces that are seen and unseen.
      </p>}
      descriptionKo={<>
        <p>보여지고, 보여지지 않은 나의 다양한 모습들</p>
        <p>{"<"}작가의 말{">"} 메세지를 입력하며 이 말을 전송할까 말까. Sns이 사진을 업로드할까 말까. 나의 다양한 자아들을 드러낼 것인가 말것인가에 대한 고민의 과정들을 텍스트 수정 사운드와 함께 무작위로 섞어 담았습니다.</p>
      </>}
    >
      <ImageLayout
        alignItems='flex-end'
        justifyContent='flex-end'
        css={css`
          padding-right: 42px;
          padding-bottom: 100px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/9_1_W.jpg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout>
        <WavyVideo
          fallbackImage={<Image 
            src='/works/9_0_B.png'
            css={css`
              max-width: 500px;
            `}
          />}
          css={css`
            max-width: 500px;
          `}
        >
          <source src="/works/9_0_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
