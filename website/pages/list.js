import React from 'react';
import styled from '@emotion/styled';
import Fluid from 'components/Fluid';

const List = (props) => {
  return (
    <Base>
      

      <Background>
        <FluidWrapper>
          <Fluid id={0} defaultTranslate={{ x: 0, y: 0, z: 0 }}/>
        </FluidWrapper>
      </Background>
      <Background>
        <FluidWrapper>
          <Fluid id={1} defaultTranslate={{ x: 0, y: 10, z: 0 }}/>
        </FluidWrapper>
      </Background>
      <Background>
        <FluidWrapper>
          <Fluid id={2} defaultTranslate={{ x: 0, y: 10, z: 0 }}/>
        </FluidWrapper>
      </Background>
      <Background>
        <FluidWrapper>
          <Fluid id={3} defaultTranslate={{ x: 0, y: 10, z: 0 }}/>
        </FluidWrapper>
      </Background>

      <Frame>
        <p>asdfasdfasdfasdf</p>
      </Frame>
    </Base>
  )
};

const Base = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Frame = styled.div`
  pointer-events: none;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: solid 10px gray;

  p {
    pointer-events: auto;
    :hover {
      color: red;
    }
  }
`;

const Background = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const FluidWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default List;
