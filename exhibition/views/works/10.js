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

export default function Work10() {
  useScreen('white')

  return (
    <ArtworkLayout
      page={10}
      title={'프라이아 두 카르네이루 / Praia do Carvoeiro'}
      subtitle={'조현서, 오연수, 2020, arcylic printing, 500 x 50 cm'}
      splitTitle
      descriptionEn={<p>
        It is the sea that everyone sees, but this is the sea that I captured and still remember.
      </p>}
      descriptionKo={<p>
        모두가 함께 보는 바다이지만, 내가 담고 기억하는 그 바다는 이 모습이었다. 
      </p>}
    >
        {/* <ImageLayout
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
        </ImageLayout> */}
        <ImageLayout
          justifyContent='flex-end'
          alignItems='flex-end'
          css={css`
            padding-right: 42px;
            padding-bottom: 300px;
          `}
        >
          <WavyFadeInUp>
            <Image
              src='/works/10_3_W.jpg'
              css={css`
                max-width: 300px;
              `}
            />
          </WavyFadeInUp>
        </ImageLayout>
        <ImageLayout
          justifyContent='flex-end'
          alignItems='flex-end'
          css={css`
            padding-right: 42px;
            padding-bottom: 50px;
          `}
        >
          <WavyFadeInUp>
            <Image
              src='/works/10_2_W.jpg'
              css={css`
                max-width: 300px;
              `}
            />
          </WavyFadeInUp>
        </ImageLayout>
        <ImageLayout>
          <ReplaceAfter
            after={
              <Image 
                src='/works/10_1_W.png' 
                css={css`
                  width: 1800px;
                `}
              />
            }
          >
            <WavyFadeInUp>
              <Image 
                src='/works/10_1_W_small.png' 
                css={css`
                  width: 1800px;
                `}
              />
            </WavyFadeInUp>
          </ReplaceAfter>
        </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
