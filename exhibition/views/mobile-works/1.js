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
import { WavyFadeInUp } from 'components/animate';

export default function Work1 () {
  useScreen('black');

  return (
    <PageLayout
      counter={<Counter page={1} />}
      header={
        <InlineHeader>
          <Title>Loading</Title>
          <Subtitle>조현서, 2020, arcylic printing, 160 x 80 x 2 cm</Subtitle>
        </InlineHeader>
      }

      left={
        <EnText>
          Those moments we linger to see the scene we want to witness 
          and the visuals we encounter during our wait are portrayed in real life.
        </EnText>
      }
      right={
        <KoText>보고싶은 장면을 위한 일상적인 기다리는 순간들, 그 기다림을 채우기 위해 보여지는 로딩을 현실의 풍경속에 재현했다.</KoText>
      }
    >
      <ImageLayout>
        <WavyFadeInUp>
          <img
            src="/works/1_1_B.jpg"
          />
        </WavyFadeInUp>
      </ImageLayout>
    </PageLayout>
  );
}
