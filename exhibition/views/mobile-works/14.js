/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { 
  PageLayout,
  ImageLayout
} from 'components/mobile/layout';
import Counter from 'components/mobile/counter';
import { useScreen } from 'components/theme';
import { WavyFadeInUp, WavyVideo } from 'components/animate';
import { ReplaceAfter } from 'components/perf';
import styled from '@emotion/styled';


function ArrowUp (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path d="M0 0H20V20H0z" transform="translate(-20 -178) translate(20 178)"/>
      <path fill="#FFF" fillRule="nonzero" d="M10.353 2.424l6.988 6.988-.666.665-6.058-6.057V17.44h-1V4.49l-5.586 5.587-.666-.665 6.252-6.253v-.07l.071-.001.665-.664z" transform="translate(-20 -178) translate(20 178)"/>
    </svg>
  )
}

function ArrowRight (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path d="M0 0H20V20H0z" transform="translate(-20 -114) rotate(90 -37 77)"/>
      <path fill="#FFF" fillRule="nonzero" d="M10.353 2.424l6.988 6.988-.666.665-6.058-6.057V17.44h-1V4.49l-5.586 5.587-.666-.665 6.252-6.253v-.07l.071-.001.665-.664z" transform="translate(-20 -114) rotate(90 -37 77)"/>
    </svg>
  )
}


export default function Outro ({
  onGoToFirst = () => {},
}) {
  useScreen('black')

  return (
    <PageLayout
      split
      left={
        <>
        <Direction onClick={onGoToFirst}>
          <A><ArrowUp /><span>GO TO FIRST</span></A>
        </Direction>
        <Direction>
          <A href='https://www.instagram.com/haeummyocean/' target='_blank'><ArrowRight /><span>INSTAGRAM</span></A>
        </Direction>
        <Direction>
          <A href='http://naver.me/xDYu3QK8' target='_blank'><ArrowRight /><span>GALLERY MAP</span></A>
        </Direction>
        <div css={css`
          margin-top: 10px;
        `}>
          <Paragraph>Artist Hyunseo Cho</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>Organized by Gallery Punto Blu</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>Curated byJane Lee</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>Designed by Jihye Kim</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>Online Exhibition Develped by Deokseong Kim</Paragraph>
          <Paragraph></Paragraph>
        </div>
        </>
      }
      right={
        <>
          <Paragraph>Thanks to</Paragraph>
          <Paragraph>Heeduck Son (Graphic Programmer)</Paragraph>
          <Paragraph>YeonSoo Oh (Visual Creator)</Paragraph>
          <Paragraph>Nockki (Yugyeom Kim, Seungjun Park)</Paragraph>
          <Paragraph>@Positlabs (Media Artist)</Paragraph>
          <Paragraph>Dahae Kim (Stylist)</Paragraph>
          <Paragraph>Yena Lee (Stylist)</Paragraph>
          <Paragraph>Yeji Cho (Media Artist)</Paragraph>
          <Paragraph>Eunseo Cho</Paragraph>
          <Paragraph>Mingyeong Jeon</Paragraph>
        </>
      }
    >
      
    </PageLayout>
  );
}

const TitleWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 2px;
  opacity: 0.6;
  font-size: 16px;
  line-height: 1.13;
`;

const Paragraph = styled.p`
  opacity: 0.6;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.2px;
  min-height: 0.5em;
`

const Direction = styled.div`
  pointer-events: auto;
  font-size: 20px;
  letter-spacing: -0.25px;
  vertical-align: middle;
  
  * {
    vertical-align: middle;
  }

  span {
    opacity: 0.2;
    margin-left: 10px;
  }

  margin: 5px 0;
`;

const A = styled.a`
  line-height: 0;
  cursor: pointer;
`;