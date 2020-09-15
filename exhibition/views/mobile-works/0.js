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
  useScreen('black');

  return (
    <PageLayout
      header={
        <BlockHeader>
          <Title>PETER PIPER<br />PICKED A PECK OF PICKLED PIPERS</Title>
        </BlockHeader>
      }

      left={
        <>
          <p>
            <KoText
              css={css`
                font-size: 10px;
              `}
            >자신의 페르소나를 선택하는 시대이자, 나로 인해 선택당하는 시대. 때문에 우리는 각자의 이상적-사회적 자아를 위해 삶의 일면들을 하나하나 모아 “어떤" “누구"로서의 자신을 정의한다. 인간의 뇌가 매 순간 지난 기억 중 일부만을 상기시키듯, 온라인 플랫폼 또한 의미 있는 - 또는 의미 있어야 하는 - 몇 가지 순간의 자취만을 기억한다. 이때 주변 환경, 자기 자신, 스스로의 인식을 때로는 왜곡하기도 하고, 말투나 행동, 패션을 통해 드러내는 자아가 온전한 나로서기 보다는 사회에서 인식되는 “어떤 누군가”로서 자리 잡고자 하는 것이 더욱 크게 부각된다.</KoText>
          </p>
          <p>
            <KoText
              css={css`
                font-size: 10px;
              `}
            >조현서 작가는 이런 현대인의 편집적 자아를 ‘Peter Piper’라는 가상의 인물에 빗대어 모두의 이야기임을 전달하고자 하였다. 편집적 자아는 온라인이라는 가상 공간에서의 정체성이지만, 그것이 결코 가상에 그치지 않고 결국 현실에 닿음을 디지털 아트와 설치물을 통해 다양한 각도로 조명한다.</KoText>
          </p>
        </>
      }
      right={
        <>
          <p><EnText
            css={css`
              font-size: 10px;
            `}
          >We live in an era of choosing your persona and being chosen for the presented self. Thus we define ourselves to the standards of the ideal-social self by collecting aspects of our everyday lives as “someone.” Like our brains remind only a part of the past, online platform archives the meaningful or supposed-to-be worthy moments we selectively publish. Exaggerations occur at times as we sometimes distort the surrounding environment, the self, or the cognition itself; we also often hide our genuineness to build a facade that suffices certain social positions we desire.</EnText></p>
          <p>
            <EnText
              css={css`
              font-size: 10px;
            `}>Hyunseo Cho finds such curated identity of modern people in everyone by putting an analogy to a fictional character ‘Peter Piper.’ Through digital art and installations, she investigates various perspectives that reveal the impact of the virtual identity of online to the person sitting behind the screen.</EnText></p>
        </>
      }
    >
      <ImageLayout>
        <WavyVideo
          fallbackImage={<img 
            src='/works/00_2_B.png'
          />}
        >
          <source src="/works/00_2_B.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
    </PageLayout>
  );
}

