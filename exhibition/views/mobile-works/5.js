/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { 
  PageLayout,
  ImageLayout
} from 'components/mobile/layout';
import {
  Title,
  Subtitle,
  BlockHeader,
  EnText,
  KoText,
} from 'components/mobile/artwork';
import Counter from 'components/mobile/counter';
import { useScreen } from 'components/theme';
import { WavyFadeInUp, WavyVideo } from 'components/animate';
import { ReplaceAfter } from 'components/perf';

export default function Work4A () {
  useScreen('white');

  return (
    <PageLayout
      counter={<Counter page={5} />}
      header={
        <BlockHeader>
          <Title>Crop</Title>
          <Subtitle>손희덕, 조현서, 2020, Instagram filter , monitor, 160 x 80 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
          <EnText>
          Editing everyday life may sound pessimistic. However, editing is in our daily lives as just another play.
          </EnText>
        </>
      }
      right={
        <>
          <KoText>
          일상을 편집한다는 메세지가 부정적으로 들릴 수 있다. 하지만 편집은 우리의 일상이고, 그저 즐거운 하나의 놀이이기도 하다. 이 작품은 인스타그램 필터 갤러리에서 경험할 수 있다.
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <WavyVideo
          fallbackImage={<img 
            src='/works/5_W.png'
          />}
        >
          <source src="/works/5_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </PageLayout>
  );
}
