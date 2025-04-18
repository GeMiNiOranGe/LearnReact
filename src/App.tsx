import React from 'react';
import { ThemeProvider } from 'styled-components';

import { PicsumPage, TicTacToePage, WelcomePage, YoutubePage } from '@/pages';
import theme from '@/styles/theme';
import '@/styles/css/App.css';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <PicsumPage />

      <TicTacToePage />

      <WelcomePage />

      <YoutubePage />
    </ThemeProvider>
  );
}

export default React.memo(App);
