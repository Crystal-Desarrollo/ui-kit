import { Stack, Typography } from '@mui/material';
import Image404 from './401.png';

export const Page401 = () => (
  <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
    <img
      src={Image404}
      alt="Imagen de error 401"
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
      401
    </Typography>
    <Typography
      fontWeight="600"
      color="primary.main"
      fontSize="clamp(40px, 5vw, 60px)"
      textAlign="center"
      maxWidth="80ch"
    >
      ACCESO DENEGADO
    </Typography>
    <Typography
      fontWeight="600"
      color="primary.main"
      fontSize="clamp(20px, 1vw, 40px)"
      textAlign="center"
      maxWidth="80ch"
    >
      ¡Ups! Parece que no tienes permisos para acceder a esta página.
    </Typography>
  </Stack>
);
