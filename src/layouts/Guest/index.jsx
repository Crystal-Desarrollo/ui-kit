import { Outlet } from 'react-router-dom';
import { Paper, Stack, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Copyright } from '../../components/Copyright';
import { theme } from '../../theme';

export function GuestLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container height="100dvh" sx={{}}>
        <Grid item xs={8} sx={{ overflow: 'hidden', display: { xs: 'none', lg: 'flex' } }}>
          <img
            src="/login.webp"
            alt="Gente haciendo ejercicio"
            style={{
              width: '100%',
              height: '100dvh',
              objectFit: 'cover',
              filter: 'brightness(.5)',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Stack display={{ xs: 'flex', lg: 'none' }}>
            <img
              src="/login.webp"
              alt="Gente haciendo ejercicio"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                filter: 'brightness(.5)',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />
          </Stack>
          <Paper elevation={0} sx={{ width: '100%', maxWidth: '400px', p: 4, borderRadius: 2 }}>
            <Outlet />
          </Paper>
          <Copyright sx={{ position: 'absolute', bottom: '0', w: '100%' }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
