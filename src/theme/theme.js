import { createTheme } from '@mui/material';
import { esES } from '@mui/material/locale';

export const theme = createTheme(
  {
    palette: {
      mode: 'light',
      table: {
        header: '#e2e2e2',
        openRow: '#ebf1fa',
      },
      primary: {
        main: '#6D4F8C',
        light: '#A887CC',
        dark: '#4D3762',
        contrastText: '#ffffff',
      },
      secondary: {
        lighter: '#fafafa',
        light: '#d9d9d9',
        main: '#8c8c8c',
        dark: '#262626',
        darker: '#000000',
        contrastText: '#ffffff',
      },
      cancel: {
        main: '#DADADA',
        light: '#c9c9c9',
        dark: '#c0c0c0',
        contrastText: '#000000',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
        disabled: '#545454',
        hint: '#000000',
      },
      success: {
        lighter: '#f0fcf5',
        light: '#6fbf73',
        main: '#4caf50',
        dark: '#357a38',
        darker: '#194D14',
        contrastText: '#ffffff',
      },
      error: {
        lighter: '#fff1f0',
        light: '#f6685e',
        main: '#f44336',
        dark: '#aa2e25',
        darker: '#5c0011',
        contrastText: '#ffffff',
      },
      warning: {
        lighter: '#fffbe6',
        light: '#ffd666',
        main: '#faad14',
        dark: '#faad14',
        darker: '#613400',
        contrastText: '#000000',
      },
      divider: 'rgba(0,0,0,0.3)',
    },
    typography: {
      fontSize: 16,
      fontWeightBold: 700,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      htmlFontSize: 16,
      marginBottom: 0,
      h1: {
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: '0em',
      },
      h2: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: '0em',
      },
      h3: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: '0em',
      },
      h4: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '0em',
      },
      h5: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '0em',
      },
      h6: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '0em',
      },
      button: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.01,
        letterSpacing: '0em',
      },
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            whiteSpace: 'nowrap',
            padding: '0.5rem 1rem',
          },
        },
      },
      MuiStack: {
        styleOverrides: {
          root: {
            paddingTop: '0',
            paddingBottom: '0',
          },
        },
      },
      MuiInputBase: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: '#d20f46',
            '&$error': {
              color: '#d20f46',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            transform: 'translate(14px, 10px) scale(1)',
          },
          shrink: {
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      },
      MuiButton: {
        defaultProps: {
          type: 'button',
          variant: 'contained',
          size: 'small',
        },
        styleOverrides: {
          root: {
            padding: '12px 16px',
            lineHeight: 'initial',
            textTransform: 'initial',
            width: 'max-content',
            textDecoration: 'none',
          },
          text: {
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#002f4a',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            overflowX: 'auto',
          },
        },
      },
    },
  },
  esES,
);
