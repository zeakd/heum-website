import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export function ReplaceAfter({
  children,
  after,
  time = 1000,
  active = true,
}) {
  
  const [replaced, setReplaced] = useState(false);
  useEffect(() => {
    if (active) {
      const id = setTimeout(() => {
        setReplaced(true);
      }, time)
      return () => {
        clearTimeout(id)
      }
    }

  }, [active])

  return (
    <Wrapper>
      <Child visible={!replaced}>{children}</Child>
      <After visible={replaced}>{after}</After>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Child = styled.div`
  opacity: ${({ visible }) => visible ? 1 : 0};
  pointer-events: ${({ visible }) => visible ? 'auto' : 'none'};

  transition: opacity 0.3s;
`
const After = styled.div`
  opacity: ${({ visible }) => visible ? 1 : 0};
  pointer-events: ${({ visible }) => visible ? 'auto' : 'none'};
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  /* transition: opacity 0.3s; */

  > * {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
