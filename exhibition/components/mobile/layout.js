import React from 'react';
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// import { FlexLayout } from 'components/artwork';

export function PageLayout({
  header,
  left,
  right,
  counter,
  children,
  split,
}) {
  return (
    <LayoutBase>
      {children}
      {!split && (
        <Content>
          <Header>{header}</Header>
          <TextWrapper>
            <LeftTextBox>
              {left}
            </LeftTextBox>
            <RightTextBox>
              {right}
            </RightTextBox>
          </TextWrapper>
        </Content>
      )}
      {split && (
        <Content>
          <TextWrapper>
            <LeftTextBox>
              <div css={css`
                width: 100%;
                position: absolute;
                bottom: 0;

              `}>
                {left}
              </div>
            </LeftTextBox>
            <RightTextBox>
              {right}
            </RightTextBox>
          </TextWrapper>
        </Content>
      )}
      {counter && <FlexLayout
        justifyContent='flex-start'
        css={css`
          padding-left: 20px;
          padding-bottom: 100px;
        `}
      >
        {counter}
      </FlexLayout>}
    </LayoutBase>
  )
}

const LayoutBase = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;

  pointer-events: none;

  min-height: 150px;
`;

const Header = styled.div``;

const TextWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`;
const LeftTextBox = styled.div`
  position: relative;
  padding-right: 26px;
  flex: 1 1;
  min-width: 0;
`;
const RightTextBox = styled.div`
  position: relative;
  padding-left: 26px;
  flex: 1 1;
  min-width: 0;
`;

export const FlexLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};

  * {
    pointer-events: auto;
  }
`;

export const ImageLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 56px 80px;

  * {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    width: 80%;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: contain;
  }
`
