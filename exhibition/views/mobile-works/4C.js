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
      counter={<Counter page={4} />}
      header={
        <BlockHeader>
          <Title>Warp</Title>
          <Subtitle css={css`line-height: 1.2em;`}>손희덕, 조현서 <br/>@positlabs, 2020, Instagram filter , monitor, 160 x 80 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
          <EnText>
          Warp is both the bending or twristing the appearance of the subject and the port that transports one from the real world to another at superluminal speed. People reflect and warp, and travel to the other world by editing themselves.
          </EnText>
        </>
      }
      right={
        <>
          <KoText>
            왜곡 이펙트 : @tto_kee, 번짐 효과 : @positlabswarp는 어떤 사물이나 사람이 더이상 평평하거나 똑바르게 보이지 않도록 구부리거나 비틀어서 왜곡함을 뜻함과 동시에 시공간을 왜곡해서 현실세계에서 다른 세계로 초광속 이동을 하는 문을 말한다. 사람들은 자신을 비추며 왜곡시키고, 보정해서 또 다른 세계에 들어간다. 이 작품은 인스타그램 필터 갤러리에서 경험할 수 있다.
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <WavyVideo
          fallbackImage={<img 
            src='/works/4_3_W.png'
          />}
        >
          <source src="/works/4_3_W.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </PageLayout>
  );
}
