import { Avatar as MuiAvatar } from '@mui/material';
import PropTypes from 'prop-types';

const Avatar = ({ name, profilePicture, size = 120, sx, ...rest }) => {
  return (
    <MuiAvatar
      alt={name}
      src={profilePicture ?? '/default-avatar.png'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'bottom',
        width: size,
        height: size,
        fontSize: size / 2,
        ...sx,
      }}
      {...rest}
    />
  );
};

Avatar.propTypes = {
  profilePicture: PropTypes.string.nullable,
  size: PropTypes.number,
  sx: PropTypes.object,
  name: PropTypes.string,
};

export default Avatar;
