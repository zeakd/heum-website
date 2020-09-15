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

export default function Work9A () {
  useScreen('black');

  return (
    <PageLayout
      counter={<Counter page={9} />}
      header={
        <InlineHeader>
          <Title>레이어드 / Layered</Title>
          <Subtitle>조현서, 김다해, 이예나, 조예지, 2020, film, 1080 x 1920 px</Subtitle>
        </InlineHeader>
      }

      left={
        <>
          <p>
            <EnText>
            My many faces that are seen and unseen.
            </EnText>
          </p>
          <p>
          <KoText>
            보여지고, 보여지지 않은 나의 다양한 모습들
          </KoText>
          </p>
        </>
      }
      right={
        <>
          <KoText>
          {"<"}작가의 말{">"} 메세지를 입력하며 이 말을 전송할까 말까. Sns이 사진을 업로드할까 말까. 나의 다양한 자아들을 드러낼 것인가 말것인가에 대한 고민의 과정들을 텍스트 수정 사운드와 함께 무작위로 섞어 담았습니다.
          </KoText>
        </>
      }
    >
      <ImageLayout>
        <WavyFadeInUp>
          <img
            src='/works/9_1_W.jpg'
          />
        </WavyFadeInUp>
      </ImageLayout>
    </PageLayout>
  );
}
