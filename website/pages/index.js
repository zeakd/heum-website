import React from 'react';
import styled from '@emotion/styled';
import Fluid from 'components/Fluid';

export default function Home() {
  return (
    <Base>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Content>
      <Background>
        <Fluid id={0} />
      </Background>
    </Base> 
  )
}


const Base = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  pointer-events: none;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
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
