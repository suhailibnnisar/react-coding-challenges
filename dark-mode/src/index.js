import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import ThemeContextProvider from './routes/App/contexts/theme';

ReactDOM.render(
  <ThemeContextProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ThemeContextProvider>,
  document.getElementById('root'),
);
