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
      counter={<Counter page={6} />}
      header={
        <BlockHeader>
          <Title>산책 / A walk (1,2,4)</Title>
          <Subtitle>녹기(김유겸, 박승준), 조현서, 2020, multi material on arcylic , 60cm x 85 cm</Subtitle>
        </BlockHeader>
      }

      left={
        <>
          <p>
            <EnText>
            I wonder how my experience and life is edited and archived in memory. They are jumbled in photos, magazines, texts, and many others.
            </EnText>
          </p>
          <p>
          <KoText>
            내가 보고 경험했던 일상은 지금 어떤 기억으로 편집되어 남아있을까. 사진, 잡지, 텍스트, 다양한 방법으로 기억된 정보가 혼재한다.
          </KoText>
          </p>
        </>
      }
      right={
        <>
          <KoText>
          {"<"}작가의 말{">"}자연스러운 일상들을 수많은 포맷으로 기억한다고 하였을 때, “자연스러움”을 가장 직관적인 형태인 “자연”으로 표현해 자연을 담을 수 있는 다양한 요소들을 수집하고, 이를 콜라주해 프레임에 포장한 포스터 시리즈입니다.
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <ReplaceAfter
          after={
            <img
              src='/works/6_3_2_W.jpg'
            />
          }
        >
          <WavyFadeInUp>
            <img 
              src='/works/6_3_2_W_small.jpeg'
            />
          </WavyFadeInUp>
        </ReplaceAfter>
      </ImageLayout>
    </PageLayout>
  );
}
