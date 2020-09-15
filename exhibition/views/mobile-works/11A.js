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

export default function Work11A () {
  useScreen('black')

  return (
    <PageLayout
      counter={<Counter page={11} />}
      header={
        <InlineHeader>
          <Title>Img7328</Title>
          <Subtitle>조현서, 오연수,2020, arcylic, fabric printing, 200 x 100 cm</Subtitle>
        </InlineHeader>
      }

      left={
        <>
        <p>
          <EnText>
          Selected dazzling scenes of everyday life and the repetition of those choices
          </EnText>
        </p>
        <p>
          <KoText>
            일상의 선택된 멋진 풍경과 그 선택의 반복.
          </KoText>
        </p>
        </>
      }
      right={
        <>
          <KoText>
          {"<"}작가의 말{">"} 이태원입니다. 이태원은 객관적으로 보았을 때, 복잡한 동네라고 인식이 됩니다. 하지만 이태원은 감성적인, 왠지 로망이 있는 동네이기도 하죠. 내가 기억하고 싶은 이태원. 그 면만을 선택해서 담았을 때 왜곡되는 이미지와 프레임위의 프레임을 통해 선택의 반복을 보여줍니다.
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <WavyFadeInUp>
          <img
            src='/works/11_2_B.jpg'
          />
        </WavyFadeInUp>
      </ImageLayout>
    </PageLayout>
  );
}
