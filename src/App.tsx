import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Login from 'pages/login';
import { History } from 'history';
import { RootProps } from 'types/common';

const App: React.FC<RootProps> = ({ history }: { history: History }) => {
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    //Mount
    console.log('mount', user);
    return () => {
      //Unmount
      console.log('Unmount');
    };
  }, [user]);

  return (
    <ConnectedRouter history={history}>
      {/* <Container> */}
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
      {/* </Container> */}
    </ConnectedRouter>
  );
};

export default App;
