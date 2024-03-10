import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          thumb: {
            backgroundColor: "white",
            border: "2px solid #fa7528"
          },
          track: {
            backgroundColor: '#fa7528', 
          },
          rail: {
            backgroundColor: 'gray', 
          },
        },
      },
    },
  });

const SliderTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default SliderTheme
