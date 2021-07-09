import { AuthProvider } from './context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { AppRouter } from './utils';
import { routes } from './config/routes';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;
function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Redirect to='/home' />} />
          {routes.map((route) => (
            <AppRouter
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
