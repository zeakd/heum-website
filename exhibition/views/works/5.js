import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
} from 'components/artwork'
import { WavyVideo } from 'components/animate'
import { useScreen } from 'components/theme'

export default function Work5() {
  useScreen('white')

  return (
    <ArtworkLayout
      page={5}
      title={'Crop'}
      subtitle={'손희덕, 조현서, 2020, Instagram filter , monitor, 160 x 80 cm'}
      descriptionEn={<p>
        Editing everyday life may sound pessimistic. However, editing is in our daily lives as just another play.
      </p>}
      descriptionKo={<p>
        일상을 편집한다는 메세지가 부정적으로 들릴 수 있다. 하지만 편집은 우리의 일상이고, 그저 즐거운 하나의 놀이이기도 하다. 이 작품은 인스타그램 필터 갤러리에서 경험할 수 있다. (큐알코드 삽입)
      </p>}
    >
      <ImageLayout>
        <WavyVideo
          fallbackImage={<Image 
            src='/works/5_W.png'
            css={css`
              max-width: 1000px;
            `}
          />}
          css={css`
            max-width: 1000px;
          `}
        >
          <source src="/works/5_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
