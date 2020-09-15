import React from 'react';
import styled from '@emotion/styled'

export default function Counter({
  page,
  size,
}) {
  const pageStr = page < 10 ? `0${page}` : `${page}`;

  return (
    <Base>
      <PageText>{pageStr}</PageText>
      <SizeText>{size}</SizeText>
    </Base>
  )
}

const Base = styled.div``;

const PageText = styled.span`
  min-width: 105px;
  display: inline-block;
  
  font-size: 85px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  text-align: right;
`;

const SizeText = styled.span`
  display: inline-block;

  opacity: 0.2;
  font-size: 85px;
  line-height: normal;
  /* letter-spacing: -1px; */
`;

