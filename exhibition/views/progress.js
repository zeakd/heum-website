import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { usePreload } from 'modules/preloading';

export default function Progress({
  progress
}) {
  return (
    <Base>
      <Content>
        <Welcome>
          Welcome. Scroll for viewing.
        </Welcome>
        <ProgressWrapper>
          <MaxProgressBar />
          <ProgressBar progress={progress} />
        </ProgressWrapper>
      </Content>
    </Base>
  )
}

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Welcome = styled.div`
  margin-bottom: 20px;
`;

const ProgressWrapper = styled.div`
  position: relative;
`;
const MaxProgressBar = styled.div`
  position: relative;

  width: 300px;
  opacity: 0.6;
  height: 2px;
  border-radius: 4px;
  background-color: white;
`;

const ProgressBar = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 4px;
  height: 2px;
  background-color: white;

  width: ${({ progress }) => progress * 100}%;
`;

export function withPreload(Wrapped) {
  return () => {
    const [progress] = usePreload();
    const [loaded, setLoaded] = useState(false);

    // console.log(progress);

    useEffect(() => {
      if (progress < 1) return;
      setTimeout(() => {
        setLoaded(true);
      }, 500)
    }, [progress === 1])

    if (loaded) {
      return <Wrapped />
    }

    return <Progress progress={progress} />;
  }
}