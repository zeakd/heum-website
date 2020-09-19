import React, { useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  ImageLayout,
  FlexLayout,
  DescriptionKo,
  DescriptionEn,
  Title,

} from 'components/artwork'
import { WavyFadeInUp, WavyVideo } from 'components/animate'
import { useScreen } from 'components/theme'
import Counter from 'components/counter'

export default function Work0() {
  useScreen('black');
  
  return (
    <Base>
      <ImageLayout>
        <WavyVideo
          fallbackImage={<Image 
            src='/works/00_2_B.png'
            css={css`
              max-width: 1400px;
            `}
          />}
          css={css`
            max-width: 1400px;
          `}
        >
          <source src="/works/00_2_B.mp4" type="video/mp4" />
        </WavyVideo>
      </ImageLayout>
      <Content>
        <TitleWrapper>
          <Title>PETER PIPER PICKED A PECK OF PICKLED PIPERS</Title>
        </TitleWrapper>
        <TextContent>
          <LeftTextContent>
            <DescriptionKo>
              <p>
                자신의 페르소나를 선택하는 시대이자, 나로 인해 선택당하는 시대. 때문에 우리는 각자의 이상적-사회적 자아를 위해 삶의 일면들을 하나하나 모아 “어떤" “누구"로서의 자신을 정의한다. 인간의 뇌가 매 순간 지난 기억 중 일부만을 상기시키듯, 온라인 플랫폼 또한 의미 있는 - 또는 의미 있어야 하는 - 몇 가지 순간의 자취만을 기억한다. 이때 주변 환경, 자기 자신, 스스로의 인식을 때로는 왜곡하기도 하고, 말투나 행동, 패션을 통해 드러내는 자아가 온전한 나로서기 보다는 사회에서 인식되는 “어떤 누군가”로서 자리 잡고자 하는 것이 더욱 크게 부각된다.
              </p>
              <p>
                조현서 작가는 이런 현대인의 편집되는 자아를 ‘Peter Piper’라는 가상의 인물에 빗대어 모두의 이야기임을 전달하고자 하였다. 편집되는 자아는 온라인이라는 가상 공간에서의 정체성이지만, 그것이 결코 가상에 그치지 않고 결국 현실에 닿음을 디지털 아트와 설치물을 통해 다양한 각도로 조명한다.
              </p>
            </DescriptionKo>
            <DescriptionEn
              css={css`
                margin-top: 8px;
              `}
            >
              <p>We live in an era of choosing your persona and being chosen for the presented self. Thus we define ourselves to the standards of the ideal-social self by collecting aspects of our everyday lives as “someone.” Like our brains remind only a part of the past, online platform archives the meaningful or supposed-to-be worthy moments we selectively publish. Exaggerations occur at times as we sometimes distort the surrounding environment, the self, or the cognition itself; we also often hide our genuineness to build a facade that suffices certain social positions we desire.</p>
              <p>Hyunseo Cho finds such curated identity of modern people in everyone by putting an analogy to a fictional character ‘Peter Piper.’ Through digital art and installations, she investigates various perspectives that reveal the impact of the virtual identity of online to the person sitting behind the screen.</p>
            </DescriptionEn>
          </LeftTextContent>
          <RightTextContent>
            <DescriptionKo>
              <p>
                {'<'}작가의 말{'>'}이 전시는 현대인의 편집되는 자아라는 주제를 다루고 있습니다. 여기서 편집되는 자아란, 이전에는 사람들이 사람들은 감각에 의존하여 과거를 기억하고 추억하였다면, 요즘은 온라인 기기를 들고 다니며 현재를 저장하곤 합니다. 예를 들면 카페에 가서 사람없는 틈을 타, 널부러진 영수증과 소지품을 피해 예쁜 커피잔과 풍경을 확대해서 담는 행위같은 것이죠. 사진을 찍으며, 혹은 찍은 이후에 “불필요한 부분”이 삭제되거나 왜곡되는 기록들은 곧 나의 기억이 됩니다. 그 기억의 집합체가 곧 나의 자아이기 때문에, 저는 현대인의 자아가 편집되는 특성을 가진다고 생각했습니다. 의식적으로 자신이 생각하는 이상적인 방향으로 편집된 온라인 상의 자아는 다시금 오프라인의 자아에 영향을 주며 살아갑니다. 온라인 세계, 오프라인 세계. 이는 같은 공간일 수 없지만 서로 동시에 존재하며 끊임없이 상호작용을 합니다. 오프라인에서 선택한 면이 온라인 공간에 저장되고, 또 그 저장된 기억이 오프라인의 나를 형성해나가는 것이죠. 아래의 12개의 작품은 이 시점에서 비춰진 온라인, 오프라인 세상의 다양한 모습들을 조명했습니다.
              </p>
            </DescriptionKo>
          </RightTextContent>
        </TextContent>
      </Content>
      {/* <CounterLayout
        justifyContent='flex-start'
        alignItems='center'
      >
        <Counter 
          page={0}
          size={13}
        />
      </CounterLayout> */}
      
    </Base>
  )
}

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-left: 42px;
  padding-bottom: 60px;
  padding-right: 42px;
  
`;

const TextContent = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

const LeftTextContent = styled.div`
  pointer-events: none;
  /* position: absolute; */
  /* bottom: 0; */
  left: 0;

  max-width: 900px;
  padding-right: 30px;
`

const RightTextContent = styled.div`
  pointer-events: none;
  /* position: absolute; */
  /* bottom: 0; */
  right: 0;

  max-width: 760px;
`

const TitleWrapper = styled.h2`
  line-height: 37px;
  vertical-align: middle;
  width: 100%;
`;

const CounterLayout = styled(FlexLayout)`
  padding-left: 42px;
`
const Image = styled.img``
