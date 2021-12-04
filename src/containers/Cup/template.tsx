import React from 'react';

import {
  CupWrapper,
  Container,
  Top,
  Cup,
  Circle,
  Tea,
  Handle,
  Plate,
  Vapour,
  Steam,
} from './styles';

function Template() {
  return (
    <CupWrapper>
      <Container>
        <Plate />
        <Cup>
          <Top>
            <Vapour>
              {Array(20)
                .fill(0)
                .map((item: number, index: number) => {
                  const number = Math.floor(Math.random() * 20);
                  return <Steam layer={0} key={index} index={number} />;
                })}
            </Vapour>
            <Vapour>
              {Array(20)
                .fill(0)
                .map((item: number, index: number) => {
                  const number = Math.floor(Math.random() * 20);
                  return <Steam layer={1} key={index} index={number} />;
                })}
            </Vapour>
            <Vapour>
              {Array(20)
                .fill(0)
                .map((item: number, index: number) => {
                  const number = Math.floor(Math.random() * 20);
                  return <Steam layer={2} key={index} index={number} />;
                })}
            </Vapour>
            <Circle>
              <Tea />
            </Circle>
          </Top>
          <Handle />
        </Cup>
      </Container>
    </CupWrapper>
  );
}

export default Template;
