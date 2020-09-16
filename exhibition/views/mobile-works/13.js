/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { 
  PageLayout,
  ImageLayout,
  FlexLayout,
} from 'components/mobile/layout';
import Counter from 'components/mobile/counter';
import { useScreen } from 'components/theme';
import { WavyFadeInUp, WavyVideo } from 'components/animate';
import { ReplaceAfter } from 'components/perf';
import styled from '@emotion/styled';

export default function Work13 () {
  useScreen('black')

  return (
    <PageLayout
      split
      counter={<Counter page={13} />}
      left={
        <>
        <TitleWrapper>
          <p>PICKED PIPERS</p>
          <p>PETER PIPER PICKED A PECK OF PICKED PIPERS.</p>
        </TitleWrapper>
        <p>
          <Text>
          Hyunseo Cho 1st solo exhibition
          </Text>
        </p>
        <TitleWrapper>
          <p>GALLERY PUNTO BLU</p>
        </TitleWrapper>
        <p>
          <Text>Mon-Sat 11-22</Text>
        </p>
        <p>
          <Text>61, Seongsui-ro 22-gil, Seongdong-gu, Seoul, Republic of Korea</Text>
        </p>
        <p>
          <Text>@puntoblueseoul</Text>
        </p>
        </>
      }
      right={
        <>
          <TitleWrapper>
            <p>HYUNSEO CHO</p>
          </TitleWrapper>
          <p>
            <Text>조현서는 멀티미디어 아티스트로 대한민국 서울을 기반으로 한 브랜드 디자이너다. 그녀의 작품은 설치와 미디어 아트에서부터 브랜드 아이덴티티와 전시 디자인에 이르기까지 다양하다. 예술가로서나 디자이너로서, 그녀는 자신의 작품과 고객들의 작품과 디지털 예술작품의 균형을 맞춘다.</Text>
          </p>
          <p>
            <Text>Hyunseo Cho is a multi-media artist and a brand designer based on Seoul, Republic of Korea. Her works range from installation and media art to the brand identity and exhibition design. Both as an artist and a designer, she balances her own work and the ones of the clients with digital artworks.</Text>
          </p>
          <br />
          <p>
            <Text>www.hyunseocho.com</Text>
          </p>
          <p>
            <Text>@haeummyocean</Text>
          </p>
        </>
      }
    >
      <FlexLayout
        css={css`
          img { 
            max-height: 40vh;
          }
        `}
      >
        <WavyFadeInUp>
          <img 
            src='/works/fin_2_B.jpeg'
            css={css`
              margin-right: 15px;
            `}
          />
        </WavyFadeInUp>
        <WavyFadeInUp>
          <img 
            src='/works/fin_3_B.jpeg'
          />
        </WavyFadeInUp>
      </FlexLayout>
    </PageLayout>
  );
}

const TitleWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 2px;
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.13;
`;

// const Title = styled.span`
//   opacity: 0.6;
//   font-size: 16px;
//   line-height: 1.13;
// `

const Text = styled.span`
  opacity: 0.6;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.2px;
`