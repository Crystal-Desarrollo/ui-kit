import { Link, Stack, Typography } from '@mui/material';
import LogoCrystal from '../../assets/logo-crystal.png';
import PropTypes from 'prop-types';

const Copyright = ({ sx, logo }) => (
  <Stack direction="column" alignItems="center" sx={{ ...sx }}>
    <img src={logo} alt="Logo Panda" style={{ marginBottom: '-16px' }} />
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
        <img src={LogoCrystal} alt="Logo de Crystal Desarrollo" style={{ marginLeft: '8px' }} />
      </Link>
    </Typography>
  </Stack>
);

Copyright.propTypes = {
  sx: PropTypes.object,
  logo: PropTypes.string.isRequired,
};

export default Copyright;
