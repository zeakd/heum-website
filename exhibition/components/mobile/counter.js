import React from 'react';
import styled from '@emotion/styled'

export default function Counter({
  page,
  size = 13,
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
  display: inline-block;
  font-size: 20px;  
  text-align: right;
  
  min-width: 24px;
`;

const SizeText = styled.span`
  display: inline-block;
  opacity: 0.2;
  font-size: 20px;
  line-height: normal;
`;

