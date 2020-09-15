import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Counter from './counter';

export const Title = styled.span`
  opacity: 0.6;
  font-size: 24px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
`

export const Subtitle = styled.span`
  opacity: 0.4;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.27px;
  ${({ splitTitle }) => splitTitle && css`
    display: block;
    margin-bottom: 8px;
  `}
`

export const DescriptionEn = styled.div`
  opacity: 0.6;
  font-size: 16px;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.27px;
`

export const DescriptionKo = styled.div`
  opacity: 0.6;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.87;
  letter-spacing: -0.47px;
`

export const FlexLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};

  * {
    pointer-events: auto;
  }
`;

export const ImageLayout = FlexLayout;

export function Video (props) {
  return <StyledVideo 
    autoPlay
    muted
    controls
    loop
    {...props} 
  />
}

const StyledVideo = styled.video`
  max-width: 100%;
  user-select: none;
  outline: none;
`

export function ArtworkLayout ({
  title,
  subtitle,
  descriptionEn,
  descriptionKo,
  page,
  children,
  splitTitle,
}) {
  return (
    <Base>
      {children}
      <TextContent>
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle splitTitle={splitTitle}>{subtitle}</Subtitle>
        </TitleWrapper>
        <DescriptionEn>
          {descriptionEn}
        </DescriptionEn>
        <DescriptionKo>
          {descriptionKo}
        </DescriptionKo>
      </TextContent>
      <CounterLayout
        justifyContent='flex-start'
        alignItems='center'
      >
        <Counter 
          page={page}
          size={13}
        />
      </CounterLayout>
    </Base>
  )
}


const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const TextContent = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 60px;
  padding-left: 42px;

  ${Title} {
    margin-right: 12px;
  }

  max-width: 790px;
`
const TitleWrapper = styled.h2`
  line-height: 37px;
  vertical-align: middle;
  width: 100%;
`;

const CounterLayout = styled(FlexLayout)`
  padding-left: 42px;
`