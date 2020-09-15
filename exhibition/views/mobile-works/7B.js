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

export default function Work7A () {
  useScreen('black');

  return (
    <PageLayout
      counter={<Counter page={7} />}
      header={
        <BlockHeader>
          <Title>네버랜드 / Neverland</Title>
          <Subtitle>조현서, 2020, fabric printing, 200 x 200 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
          <EnText>
          Simply think of your happy moments. Then you can fly and reach there. The ‘un-ideal’ world that you want to forget as you age. This unchosen land in unconsciousness appears when everyone is asleep.
          </EnText>
        </>
      }
      right={
        <>
          <KoText>
          그저 행복한 기억을 떠올려봐. 그럼 날아서 저 곳에 도착할 수 있어. 어른이 되면서 잊기를 바라는, ‘비(非)이상’의 세계. 이 선택되지 않은 세계는 무의식속에 남아있다가 모두가 잠드는 밤에 나타난다.
          </KoText>
        </>
      }
    >
      <ImageLayout
        
      >
        <WavyFadeInUp>
          <img 
            src='/works/7_0_B.jpg'
          />
        </WavyFadeInUp>
      </ImageLayout>
    </PageLayout>
  );
}
