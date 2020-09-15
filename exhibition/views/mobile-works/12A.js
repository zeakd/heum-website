/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { 
  PageLayout,
  ImageLayout
} from 'components/mobile/layout';
import {
  Title,
  Subtitle,
  InlineHeader,
  EnText,
  KoText,
} from 'components/mobile/artwork';
import Counter from 'components/mobile/counter';
import { useScreen } from 'components/theme';
import { WavyFadeInUp, WavyVideo } from 'components/animate';
import { ReplaceAfter } from 'components/perf';

export default function Work12A () {
  useScreen('white')

  return (
    <PageLayout
      counter={<Counter page={12} />}
      header={
        <InlineHeader>
          <Title>Feed</Title>
          <Subtitle>조현서, 손희덕, 2020, multi media, 200 x 200 cm</Subtitle>
        </InlineHeader>
      }

      left={
        <>
        <p>
          <EnText>
          Instagram posts with “#Shopping” hashtag is printed on receipts and pile up in real-time. This might flood the tank.
          </EnText>
        </p>
        <p>
          <KoText>
          “#Shopping”의 해시태그를 단 인스타그램 게시물이 실시간으로 영수증 기계에서 뽑혀 내려와 쌓인다. 곧 이 수조가 넘쳐 흘러 내려 버릴지도.
          </KoText>
        </p>
        </>
      }
      right={
        <>
          <KoText>
          {"<"}작가의 말{">"} 무엇을 어느정도의 가치를 주고 구매하느냐가 곧 한 사람의 가치관을 대변한다고 생각했습니다. 그리고 수많은 사람들이 이를 드러내는 행위를 실시간으로 보여줌으로서 소비를 통한 가치관 형성, 드러냄, 또 다시 소비되는 이미지, 폐기처분되고 넘치는 정보들. 을 표현했습니다.
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <ReplaceAfter
          after={
            <img
              src='/works/12_3_W.png'
            />
          }
        >
          <WavyFadeInUp>
            <img 
              src='/works/12_3_W_small.png'
            />
          </WavyFadeInUp>
        </ReplaceAfter>
      </ImageLayout>
    </PageLayout>
  );
}
