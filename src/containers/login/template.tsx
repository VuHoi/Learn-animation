import React from 'react';

import 'App.css';
import { LoginWrapper, Loader, Child } from './styles';

function LoginTemplate() {
  return (
    <LoginWrapper>
      <Loader width={500} height={500}>
        {Array(25)
          .fill(0)
          .map((item: number, index: number) => (
            <Child index={index} />
          ))}
      </Loader>
    </LoginWrapper>
  );
}

export default LoginTemplate;
