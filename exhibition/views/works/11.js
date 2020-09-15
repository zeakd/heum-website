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

export default function Work11() {
  useScreen('black')

  return (
    <ArtworkLayout
      page={11}
      title={'Img7328'}
      subtitle={'조현서, 오연수,2020, arcylic, fabric printing, 200 x 100 cm'}
      descriptionEn={<p>
        Selected dazzling scenes of everyday life and the repetition of those choices
      </p>}
      descriptionKo={<>
        <p>일상의 선택된 멋진 풍경과 그 선택의 반복.</p>
        <p>{"<"}작가의 말{">"} 이태원입니다. 이태원은 객관적으로 보았을 때, 복잡한 동네라고 인식이 됩니다. 하지만 이태원은 감성적인, 왠지 로망이 있는 동네이기도 하죠. 내가 기억하고 싶은 이태원. 그 면만을 선택해서 담았을 때 왜곡되는 이미지와 프레임위의 프레임을 통해 선택의 반복을 보여줍니다.</p>
      </>}
    >
      <ImageLayout>
        <WavyFadeInUp>
          <Image 
            src='/works/11_2_B.jpg'
            css={css`
              max-width: 600px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        justifyContent={'flex-end'}
        css={css`
          padding-right: 42px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/11_1_B.jpg'
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
