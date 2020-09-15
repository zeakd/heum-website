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

export default function Work10A () {
  useScreen('white')

  return (
    <PageLayout
      counter={<Counter page={10} />}
      header={
        <BlockHeader>
          <Title>프라이아 두 카르네이루 / Praia do Carvoeiro</Title>
          <Subtitle>조현서, 오연수, 2020, arcylic printing, 500 x 50 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
          <EnText>
          It is the sea that everyone sees, but this is the sea that I captured and still remember.
          </EnText>
        </>
      }
      right={
        <>
          <KoText>
            모두가 함께 보는 바다이지만, 내가 담고 기억하는 그 바다는 이 모습이었다. 
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <ReplaceAfter
          after={
            <img 
              src='/works/10_1_W.png' 
            />
          }
        >
          <WavyFadeInUp>
            <img 
              src='/works/10_1_W_small.png' 
            />
          </WavyFadeInUp>
        </ReplaceAfter>
      </ImageLayout>
    </PageLayout>
  );
}
