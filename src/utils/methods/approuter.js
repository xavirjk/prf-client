import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from '../../context';

export const AppRouter = ({
  component: Component,
  path,
  isPrivate,
  ...rest
}) => {
  const { token } = useAuthState();
  /**
   * Some of the common templates i usually Reuse
   */
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !token ? (
          <Redirect to={{ pathname: '/sign-in' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};
