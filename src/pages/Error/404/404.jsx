import { Box, Typography } from '@mui/material';
import Image404 from './404.png';

export const Page404 = () => (
  <Box
    sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={Image404}
        alt="Imagen de error 404"
        style={{ maxWidth: '80%', margin: '0 auto', marginBottom: '2rem' }}
      />
      <Typography
        fontWeight="600"
        color="primary.main"
        fontSize="clamp(80px, 10vw, 500px)"
        textAlign="center"
        sx={{ lineHeight: 1 }}
        maxWidth="80ch"
      >
        404
      </Typography>
      <Typography
        fontWeight="600"
        color="primary.main"
        fontSize="clamp(40px, 5vw, 60px)"
        textAlign="center"
        maxWidth="80ch"
      >
        PÁGINA NO ENCONTRADA
      </Typography>
      <Typography
        fontWeight="600"
        color="primary.main"
        fontSize="clamp(20px, 1vw, 40px)"
        textAlign="center"
        maxWidth="80ch"
      >
        Parece que la página que estás buscando no existe.
      </Typography>
    </Box>
  </Box>
);
