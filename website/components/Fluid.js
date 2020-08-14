import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';

const Fluid = ({
  className,
  render = () => {},
  id,
  defaultTranslate = { x: 0, y: 0, z: 0 },
}) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const elemRef = useRef();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTranslate(prev => {
        if (prev.y < -50) {
          return ({ ...prev, y: - 0.03 });
        }

        return ({ ...prev, y: prev.y - 0.03 });
      })
    }, 10)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Base 
      ref={elemRef}
      className={className}
    >
      <Wrapper
        style={{
          transform: `translate3d(0, ${translate.y + 25}%, 0)`,  
        }}
      >
        <Distance>
          <WorkWrapper
            
          >
            <Image 
              src={`https://source.unsplash.com/random?${id}`}
            />
          </WorkWrapper>
        </Distance>
        <Distance>
          <WorkWrapper>
            <Image 
              src={`https://source.unsplash.com/random?${id}`} 
            />
          </WorkWrapper>
        </Distance>
      </Wrapper>
    </Base>
  )
};

const Base = styled.div`
  position: relative;
  transform: rotate3d(1, 0, 1, 30deg);
`;

const Wrapper = styled.div``;

const Distance = styled.div`
  min-height: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorkWrapper = styled.div`
  width: 60%;
  filter: blur(4px);
  transition: filter 0.3s;
  :hover {
    filter: blur(0);
  }
`

const Image = styled.img`
  pointer-events: auto;
  max-width: 100%;
  transform: rotate3d(0, 1, 1, -30deg);
`;

export default Fluid;
