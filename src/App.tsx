import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import router from './app/routing';
import './App.scss';
import Button from '@mui/material/Button';
import { RouterProvider } from 'react-router-dom';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <header className="App-header">
          <Button
            onClick={() =>
              setMode((prevMode: PaletteMode) =>
                prevMode === 'light' ? 'dark' : 'light'
              )
            }
          >
            Toggle Theme
          </Button>
          <RouterProvider router={router}></RouterProvider>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
