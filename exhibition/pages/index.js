import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import MobileDetect from 'mobile-detect'
import styled from '@emotion/styled';
import Screen from 'components/screen';
import { Joystick } from 'modules/joystick';
import { useTheme } from 'components/theme';
import Intro from 'views/works/intro'
import Work0 from 'views/works/0'
import Work1 from 'views/works/1'
import Work2 from 'views/works/2'
import Work3 from 'views/works/3'
import Work4 from 'views/works/4'
import Work5 from 'views/works/5'
import Work6 from 'views/works/6'
import Work6A from 'views/works/6-A'
import Work6B from 'views/works/6-B'
import Work6C from 'views/works/6-C'
import Work7 from 'views/works/7'
import Work8 from 'views/works/8'
import Work9 from 'views/works/9'
import Work10 from 'views/works/10'
import Work11 from 'views/works/11'
import Work12 from 'views/works/12'
import Outro from 'views/works/13'
import Fin from 'views/works/14'
import { usePreload } from 'modules/preloading';
import Progress, { withPreload } from 'views/progress';

const redirect = (ctx, location) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  }
}


const isMobile = (ctx) => {
  const md = new MobileDetect(ctx.req.headers['user-agent']);

  return !!md.mobile();
}

function PageView({ pageIndex, views }) {
  return views[pageIndex] || null;
}

function DesktopHome () {
  const [{ screen }] = useTheme()
  // console.log(progress);

  const views = [
    <Intro />,
    <Work0 />,
    <Work1 />,
    <Work2 />,
    <Work3 />,
    <Work4 />,
    <Work5 />,
    <Work6 />,
    <Work6A />,
    <Work6B />,
    <Work6C />,
    <Work7 />,
    <Work8 />,
    <Work9 />,
    <Work10 />,
    <Work11 />,
    <Work12 />,
    <Outro />,
    <Fin 
      onGoToFirst={() => setPageIndex(0)}
    />,
  ]

  // handle pages
  const [pageIndex, setPageIndex] = useState(-1)
  const joystickRef = useRef(new Joystick());
  joystickRef.current.onForward = () => {
    setPageIndex(prev => prev < views.length - 1 ? prev + 1 : prev);
  }
  joystickRef.current.onBackward = () => {
    setPageIndex(prev => prev > 0 ? prev - 1 : 0);
  }

  useEffect(() => {
    joystickRef.current.activate();

    const id = setTimeout(() => {
      setPageIndex(prev => {
        if (prev > 0) return prev;
        return 0;
      });
    }, 2000)

    return () => {
      joystickRef.current.deactivate();
      clearTimeout(id);
    }
  }, [])

  return (
    <Base>
      <Head>
        <title>PETER PIPER PICKED A PECK OF PICKLED PIPERS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="PETER PIPER PICKED A PECK OF PICKLED PIPERS" />
        <meta property="og:image" content="/works/00_1_B.jpg" />
        <meta property="og:url" content="https://https://www.pickledpipers.com/" />
      </Head>
      <Screen theme={screen} 
        isFirst={pageIndex === -1 || pageIndex === 0}
      >
        <PageView 
          pageIndex={pageIndex}
          views={views}
        />
      </Screen>
    </Base>
  )
}

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default withPreload(DesktopHome)

export const getServerSideProps = async (ctx) => {
  if (isMobile(ctx)) {
    redirect(ctx, '/m');
  }

  return { props: {} };
};

