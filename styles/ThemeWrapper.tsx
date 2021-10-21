import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { defaultTheme, materialUI } from './themes';
import { ThemeProvider } from 'styled-components';
interface Props {
  children: React.ReactNode;
}

export const ThemeWrapper = ({ children }: Props) => (
  <MuiThemeProvider theme={materialUI}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  </MuiThemeProvider>
);
