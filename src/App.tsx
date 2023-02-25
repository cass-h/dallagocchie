import React, { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import router from './app/routing';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { selectTheme, setTheme } from './features/settings/settings.slice';
import { useAppDispatch, useAppSelector } from './app/hooks';
function App() {
  // #region Theme
  const prefersTheme = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const dispatch = useAppDispatch();
  // listen to the user's theme preference, this allows them to set it in browser or in prefs
  useEffect(() => {
    dispatch(setTheme(prefersTheme));
  }, [prefersTheme]);
  const mode = useAppSelector(selectTheme);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // #endregion
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <header className="App-header"></header>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
