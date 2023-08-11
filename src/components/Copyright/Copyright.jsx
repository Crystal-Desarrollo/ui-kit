import { Link, Stack, Typography } from '@mui/material';
import Logo from '../../assets/logo.png';
import LogoCrystal from '../../assets/logo-crystal.png';

const Copyright = ({ sx }) => (
  <Stack direction="column" alignItems="center" sx={{ ...sx }}>
    <img src={Logo} alt="Logo Panda" style={{ marginBottom: '-16px' }} />
    <Typography
      variant="caption"
      color="text.secondary"
      align="center"
      sx={{
        p: 1,
        width: '100%',
        backgroundColor: '#fff',
      }}
    >
      <Link
        color="inherit"
        href="https://crystal-desarrollo.com"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        Powered by Crystal Desarrollo
        <img
          src={LogoCrystal}
          alt="Logo de Crystal Desarrollo"
          style={{ marginLeft: '8px' }}
        />
      </Link>
    </Typography>
  </Stack>
);

export default Copyright;
