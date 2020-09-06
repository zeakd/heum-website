import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled'
import { Joystick } from 'modules/joystick';
import Wavy from 'components/Wavy';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [pageIndex, setPageIndex] = useState(-1)
  const joystickRef = useRef(new Joystick());
  joystickRef.current.onForward = () => {
    setPageIndex(prev => prev < 5 ? prev + 1 : prev);
  }
  joystickRef.current.onBackward = () => {
    setPageIndex(prev => prev > 0 ? prev - 1 : 0);
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => setLoaded(true), 1000);
      setTimeout(() => setPageIndex(0), 2000)
    }, [])

  }, [])

  useEffect(() => {
    if (!loaded) return;
    joystickRef.current.activate();

    return () => {
      joystickRef.current.deactivate();
    }
  }, [loaded])

  console.log(pageIndex)

  return (
    <Base>
      <Main active={loaded}>
        <Content style={{ transform: `translateY(${-100 * pageIndex}vh)`}}>
          <Page>
            <Wavy active={pageIndex === 0}>
              <Image src='https://source.unsplash.com/random?0' />
            </Wavy>
          </Page>
          <Page>
            <Wavy active={pageIndex === 1}>
              <Image src='https://source.unsplash.com/random?1' />
            </Wavy>
          </Page>
          <Page>
            <Wavy active={pageIndex === 2}>
              <Image src='https://source.unsplash.com/random?2' />
            </Wavy>
          </Page>
          <Page>
            <Wavy active={pageIndex === 3}>
              <Image src='https://source.unsplash.com/random?3' />
            </Wavy>
          </Page>
          <Page>
            <Wavy active={pageIndex === 4}>
              <Image src='https://source.unsplash.com/random?4' />
            </Wavy>
          </Page>
          <Page>
            <Wavy active={pageIndex === 5}>
              <Image src='https://source.unsplash.com/random?5' />
            </Wavy>
          </Page>
        </Content>
      </Main>
      
    </Base>
  )
}

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: black;
  color: white;

  transform: ${({ active }) => active ? 'scale(1)' : 'scale(0.5)'};  
  /* overflow-y: ${({ active }) => active ? 'scroll' : 'hidden'}; */
  overflow: hidden;
  transition: transform 0.5s cubic-bezier(0.87, 0, 0.13, 1);
`

const Content = styled.div`
  /* opacity: ${({ active }) => active ? '1' : '0'}; */
  /* transition: opacity 0.5s; */
  height: 100%;
`

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div``

const Image = styled.img`
  /* width: 300px; */
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

