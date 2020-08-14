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
        if (-prev.y > elemRef.current.clientHeight / 2) {
          return ({ ...prev, y: -1 });
        }

        return ({ ...prev, y: prev.y - 1 });
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
      style={{
        transform: `rotate3d(1, 0, 1, 30deg)`,
      }}
    >
      <Wrapper
        style={{
          transform: `translate3d(0, ${translate.y}px, 0)`,  
        }}
      >
        <Distance>
          <WorkWrapper>
            <Image 
              src={`https://source.unsplash.com/random?${id}`} 
              onMouseEnter={() => {
                console.log('enter id: ', id)  
              }}
              // onMouseLeave={() => {

              // }}
            />
          </WorkWrapper>
        </Distance>
        <Distance>
          <WorkWrapper>
          <Image 
              src={`https://source.unsplash.com/random?${id}`} 
              onMouseEnter={() => {
                console.log('enter id: ', id)  
              }}
              // onMouseLeave={() => {

              // }}
            />
          </WorkWrapper>
        </Distance>
      </Wrapper>
    </Base>
  )
};

const Base = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div``

const Distance = styled.div`
  min-height: 1500px;
`;

const WorkWrapper = styled.div`
  width: 60%;
  padding: 50px;
`

const Image = styled.img`
  pointer-events: auto;
  max-width: 100%;
  transform: rotate3d(0, 1, 1, -30deg);
  filter: blur(8px);
  transition: filter 0.5s;
  :hover {
    filter: blur(0);
  }
`;

export default Fluid;
