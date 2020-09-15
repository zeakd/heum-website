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

export default function Work12() {
  useScreen('white')

  return (
    <ArtworkLayout
      page={12}
      title={'Feed'}
      subtitle={'조현서, 손희덕, 2020, multi media, 200 x 200 cm'}
      descriptionEn={<p>
        Instagram posts with “#Shopping” hashtag is printed on receipts and pile up in real-time. This might flood the tank.
      </p>}
      descriptionKo={<>
        <p>“#Shopping”의 해시태그를 단 인스타그램 게시물이 실시간으로 영수증 기계에서 뽑혀 내려와 쌓인다. 곧 이 수조가 넘쳐 흘러 내려 버릴지도.</p>
        <p>{"<"}작가의 말{">"} 무엇을 어느정도의 가치를 주고 구매하느냐가 곧 한 사람의 가치관을 대변한다고 생각했습니다. 그리고 수많은 사람들이 이를 드러내는 행위를 실시간으로 보여줌으로서 소비를 통한 가치관 형성, 드러냄, 또 다시 소비되는 이미지, 폐기처분되고 넘치는 정보들. 을 표현했습니다.</p>
      </>}
    >
      <ImageLayout
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        css={css`
          padding-right: 42px;
          padding-bottom: 100px;
        `}
      >
        <WavyVideo
          fallbackImage={<Image 
            src='/works/12_4_W.jpg'
            css={css`
              max-width: 600px;
            `}
          />}
          css={css`
            max-width: 600px;
          `}
        >
          <source src="/works/12_4_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
      
      <ImageLayout
        justifyContent={'flex-end'}
        css={css`
          padding-right: 400px;
          padding-bottom: 300px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/12_0_W.jpg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        justifyContent='flex-start'
        alignItems='flex-end'
        css={css`
          padding-left: 220px;
          padding-bottom: 280px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/12_2_W.jpg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-right: 800px;
          padding-bottom: 500px;
        `}
      >
       <WavyFadeInUp>
          <Image 
            src='/works/12_1_W.png'
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
              src='/works/12_3_W.png'
              css={css`
                max-width: 600px;
              `}
            />
          }
        >
          <WavyFadeInUp>
            <Image 
              src='/works/12_3_W_small.png'
              css={css`
                max-width: 600px;
              `}
            />
          </WavyFadeInUp>
        </ReplaceAfter>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
