import React, { useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
} from 'components/artwork'
import { WavyFadeInUp } from 'components/animate'
import { useScreen } from 'components/theme'

export default function W1() {
  useScreen('black');
  
  return (
    <ArtworkLayout
      page={1}
      title={'Loading'}
      subtitle={'조현서, 2020, arcylic printing, 160 x 80 x 2 cm'}
      descriptionEn={<p>
        Those moments we linger to see the scene we want to witness 
        and the visuals we encounter during our wait are portrayed in real life.
      </p>}
      descriptionKo={
        <p>보고싶은 장면을 위한 일상적인 기다리는 순간들, 그 기다림을 채우기 위해 보여지는 로딩을 현실의 풍경속에 재현했다.</p>
      }
    >
      <ImageLayout>
        <WavyFadeInUp>
          <Image 
            css={css`
              max-width: 600px; 
            `}
            src="/works/1_1_B.jpg"
          />
        </WavyFadeInUp>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
