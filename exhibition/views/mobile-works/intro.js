import { 
  FlexLayout,
  PageLayout,
  ImageLayout,
} from 'components/mobile/layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { WavyFadeInUp } from 'components/animate';

export default function Intro () {
  return (
    <PageLayout>
      <ImageLayout>
        <WavyFadeInUp>
          <img
            src='/works/00_1_B.jpg'
            // css={css`
            //   max-width: 500px;
            // `}
          />
        </WavyFadeInUp>
      </ImageLayout>
    </PageLayout>
  );
}