import React, { useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ArtworkLayout,
  ImageLayout,
} from 'components/artwork'
import { FadeInUp, WavyFadeInUp, useWavyFilter } from 'components/animate'
import { ReplaceAfter } from 'components/perf'
import { useScreen } from 'components/theme'

export default function W3() {
  useScreen('white')

  return (
    <ArtworkLayout
      page={3}
      title={'박태기 나무 / Redbud'}
      subtitle={'조현서, 오연수, Chiffon printing, iron, 70 x 50 x 50 cm'}
      descriptionEn={<p>
        The redbud that I always look at, staying still in the middle of the garden. Renewing those encounters today by capturing its faces.
      </p>}
      descriptionKo={<p>
        항상 가만히 서서 바라보는 뜰 안의 나무. 오늘은 새삼스럽게 마주보며 그 얼굴을 담는다.
      </p>}
    >
      {/* <div
        css={css`
          width: 100%;
          height: 100%;
          ${filterId && css`filter: url(#${filterId});`}
        `}
      > */}
        <ImageLayout
          
        >
          <WavyFadeInUp>
            <Image 
              src='/works/3_2_W_reduced.png' 
              css={css`
                max-width: 800px;
                margin-right: 60px;
              `}
            />
          </WavyFadeInUp>
        </ImageLayout>
        <ImageLayout
          justifyContent='flex-start'
        >
          <ReplaceAfter after={<Image src='/works/3_3_W.jpeg'/>}>
            <WavyFadeInUp> 
              <Image 
                src='/works/3_3_W_reduced.jpg'
                css={css`
                  max-width: 500px;
                `}  
              />
            </WavyFadeInUp>
          </ReplaceAfter>
        </ImageLayout>
        <ImageLayout
          justifyContent='flex-end'
        >
          <ReplaceAfter after={<Image src='/works/3_1_W.png'/>}>
            <WavyFadeInUp>
              <Image
                src='/works/3_1_W_reduced.png'
                css={css`
                  max-width: 500px;
                `}
              />
            </WavyFadeInUp>
          </ReplaceAfter>
        </ImageLayout>
      {/* </div> */}
      {/* {filterElem} */}
    </ArtworkLayout>
  )
}

const Image = styled.img``
