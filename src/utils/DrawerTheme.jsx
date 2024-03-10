import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
            paper: {
                padding: "1rem 2rem"
            }
        },
      },
    },
  });

const DrawerTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default DrawerTheme
