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
      counter={<Counter page={2} />}
      header={
        <BlockHeader>
          <Title>포플러 나무 / Poplar tree</Title>
          <Subtitle>조현서, 오연수, Chiffon printing, iron, 180 x 50 x 70 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
        <p>
          <EnText>
            The moment I looked up a large poplar tree on the mountain behind the house and took a photo with the sudden realization of how beautiful it was in sunlight. The tree was archived at that very second.
          </EnText>
        </p>
        <p>
          <KoText>집 뒷산의 거대한 포플러 나무를 올려다보는데 햇살을 받는 모습이 문득 예뻐서, 핸드폰을 들어 찍을 때. 그때의 내 시점에 그 나무는 저장되었다.</KoText>
        </p>
        </>
      }
      right={
        <>
        <p></p>
        <p><KoText>{"<"}작가의 말{">"}새삼 일상의 풍경이 예뻐보일 때, 우리는 핸드폰을 올려 들어 사진을 찍습니다. 가령 마음에 드는 나무를 느끼며 프레임 안에 이상적인 일면을 담습니다. 그 프레임의 나무가 다시 실제의 공간에 구현된다면 어떤 모습일까하는 물음의 작품입니다. 나의 기억 속 나무는 어느정도 왜곡되어 있기도, 실제 나무와 유사해보이기도 하지만, 그 일면만이 남겨진 채 밝게 빛납니다.</KoText></p>
        </>
      }
    >
      <ImageLayout>
        <ReplaceAfter
          after={
            <img src="/works/2_1_W.png" />
          }
        >
          <WavyFadeInUp>
            <img 
              src="/works/2_1_W_reduced.png"
            />
          </WavyFadeInUp>
        </ReplaceAfter>
      </ImageLayout>
    </PageLayout>
  );
}
