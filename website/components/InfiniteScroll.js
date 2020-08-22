import React from 'react';
import styled from '@emotion/styled';

export default function InfiniteScroll ({
  children
}) {
  return (
    <Base
      onScroll={() => {}}
    >
      {children}
      {/* {children} */}
    </Base>
  )
}

const Base = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;