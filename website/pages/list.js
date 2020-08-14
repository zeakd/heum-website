import React from 'react';
import styled from '@emotion/styled';
import Fluid from 'components/Fluid';

const List = (props) => {
  return (
    <Base>
      <Fluid id={0} defaultTranslate={{ x: 0, y: 0, z: 0 }}/>
      <Fluid id={1} defaultTranslate={{ x: 0, y: 400, z: 0 }}/>
    </Base>
  )
};

const Base = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  /* transform: rotate3d(1, 0, 1, 45deg); */
`;

export default List;
