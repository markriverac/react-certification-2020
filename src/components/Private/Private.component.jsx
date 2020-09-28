import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../providers/UserProvider/User.context';

function Private({ children, ...rest }) {
  const user = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => (user.userState.isAuth ? children : <Redirect to="/" />)}
    />
  );
}

export default Private;
