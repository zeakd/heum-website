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

export default function Work8() {
  useScreen('black')

  return (
    <ArtworkLayout
      page={8}
      title={'춤'}
      subtitle={'조현서, 2020, motion grapic, 1080 x 1920 px'}
      descriptionEn={<p>
        A video of shimmering people who dance to the beat glamorously, making facial expressions. They seem simply happy yet grotesque at times. It illustrates the dance of people of the modern era, homaging ‘Dance’ of Henri Matisse.
      </p>}
      descriptionKo={<>
        <p>짧은 비디오의, 멋지게 춤추며 음악에 맞추어 표정을 연기하는 반짝이는 사람들. 이 모습이 마냥 즐겁게 느껴지기도, 때로는 그로테스크하게 느껴지기도 한다. 앙리 마티스의 ‘춤’을 오마주하여 현대인의 춤을 표현하였다.</p>
        <p>{"<"}작가의 말{">"} 숏 비디오 플랫폼 틱톡의 영상을 보면서 느끼는 감정을 표현했습니다. 반짝반짝 빛나는 춤추는 사람들. 따라 추고 싶을만큼 흥겹기도, 중독성을 불러 일으키기도, 왠지 불편한 기분이 들기도 합니다. 20세기 화가 앙리 마티스는 당시의 춤을 보고 느껴진 감정을 표현하기 위해 {"<"}춤{">"}을 그려냈다고 합니다. 산, 하늘, 빙글빙글 원을 그리는 사람들의 포맷을 차용해 현대의 춤을 짧은 15초의 동영상으로 표현했습니다.</p>
      </>}
    >
      <ImageLayout
        css={css`
          padding-left: 1400px;
          padding-top: 50px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/8_1_B.jpeg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout
        css={css`
          padding-left: 1200px;
          padding-top: 500px;
        `}
      >
        <WavyFadeInUp>
          <Image 
            src='/works/8_2_B.jpg'
            css={css`
              max-width: 300px;
            `}
          />
        </WavyFadeInUp>
      </ImageLayout>
      <ImageLayout>
        <WavyVideo
          fallbackImage={<Image 
            src='/works/8_3_B.jpg'
            css={css`
              max-width: 1000px;
            `}
          />}
          css={css`
            max-width: 1000px;
          `}
        >
          <source src="/works/8_3_B.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </ArtworkLayout>
  )
}

const Image = styled.img``
