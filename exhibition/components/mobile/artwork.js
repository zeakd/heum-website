import React from 'react';
import styled from '@emotion/styled'

export const TitleWrapper = styled.div`

`;

export const Title = styled.span`
  opacity: 0.6;
  font-size: 16px;
`
export const Subtitle = styled.span`
  opacity: 0.4;
  font-size: 12px;
`

export const InlineHeader = styled.div`
  ${Title} {
    margin-right: 8px;
  }
`;

export const BlockHeader = styled.div`
  ${Title} {
    margin-bottom: 8px;
    display: block
  }
  ${Subtitle} {
    display: block;
  }
`;

export const KoText = styled.span`
  opacity: 0.6;
  font-family: 'Noto Sans KR';
  font-size: 11px;
  line-height: 1.64;
  letter-spacing: -0.46px;
`;

export const EnText = styled.span`
  opacity: 0.6;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.2px;
`;
