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
import { WavyFadeInUp } from 'components/animate';
import { ReplaceAfter } from 'components/perf';

export default function Work1 () {
  useScreen('white');

  return (
    <PageLayout
      counter={<Counter page={3} />}
      header={
        <BlockHeader>
          <Title>박태기 나무 / Redbud</Title>
          <Subtitle>조현서, 오연수, Chiffon printing, iron, 70 x 50 x 50 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
          <EnText>
          The redbud that I always look at, staying still in the middle of the garden. Renewing those encounters today by capturing its faces.
          </EnText>
        </>
      }
      right={
        <>
          <KoText>항상 가만히 서서 바라보는 뜰 안의 나무. 오늘은 새삼스럽게 마주보며 그 얼굴을 담는다.</KoText>
        </>
      }
    >
      <ImageLayout>
        <ReplaceAfter
          after={
            <img src="/works/3_2_W_reduced.png" />
          }
        >
          <WavyFadeInUp>
            <img 
              src="/works/3_2_W_reduced.png"
            />
          </WavyFadeInUp>
        </ReplaceAfter>
      </ImageLayout>
    </PageLayout>
  );
}
